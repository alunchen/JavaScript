export const ImageTool = {
  /*
   * @param rawImageArray{ArrayBuffer|Array|Blob}
   */
  getSegments: function (rawImage, callback) {
    if (rawImage instanceof Blob) {
      var that = this;
      var fileReader = new FileReader();
      fileReader.onload = function () {
        that.getSegments(fileReader.result, callback);
      };
      fileReader.readAsArrayBuffer(rawImage);
    } else {
      if (!rawImage.length && !rawImage.byteLength) {
        return [];
      }
      var head = 0,
        segments = [];
      var length, endPoint, seg;
      var arr = [].slice.call(new Uint8Array(rawImage), 0);

      while (1) {
        if (arr[head] === 0xff && arr[head + 1] === 0xda) {
          //Start of Scan 0xff 0xda  SOS
          break;
        }

        if (arr[head] === 0xff && arr[head + 1] === 0xd8) {
          //Start of Image 0xff 0xd8  SOI
          head += 2;
        } else {
          //找到每个marker
          length = arr[head + 2] * 256 + arr[head + 3]; //每个marker 后 的两个字节为 该marker信息的长度
          endPoint = head + length + 2;
          seg = arr.slice(head, endPoint); //截取信息
          head = endPoint;
          segments.push(seg); //将每个marker + 信息 push 进去。
        }
        if (head > arr.length) {
          break;
        }
      }
      callback(segments);
    }
  },
  /*
   * @param resizedImg{ArrayBuffer|Blob}
   * @param exifArr{Array|Uint8Array}
   */
  insertEXIF: function (resizedImg, exifArr, callback) {
    if (resizedImg instanceof Blob) {
      var that = this;
      var fileReader = new FileReader();
      fileReader.onload = function () {
        that.insertEXIF(fileReader.result, exifArr, callback);
      };
      fileReader.readAsArrayBuffer(resizedImg);
    } else {
      var arr = [].slice.call(new Uint8Array(resizedImg), 0);
      if (arr[2] !== 0xff || arr[3] !== 0xe0) {
        // throw new Error("Couldn't find APP0 marker from resized image data.");
        return resizedImg; //不是标准的JPEG文件
      }

      var app0_length = arr[4] * 256 + arr[5]; //两个字节

      var newImage = [0xff, 0xd8].concat(exifArr, arr.slice(4 + app0_length)); //合并文件 SOI + EXIF + 去除APP0的图像信息

      callback(new Uint8Array(newImage));
    }
  },
  /*
   * @param segments{Array|Uint8Array}
   */
  getEXIF: function (segments) {
    if (!segments.length) {
      return [];
    }
    var seg = [];
    for (var x = 0; x < segments.length; x++) {
      var s = segments[x];
      //TODO segments
      if (s[0] === 0xff && s[1] === 0xe1) {
        // app1 exif 0xff 0xe1
        seg = seg.concat(s);
      }
    }
    return seg;
  },
  /*
   *@param base64{String}
   */
  decode64: function (base64) {
    var b64 = "data:image/jpeg;base64,";
    if (base64.slice(0, 23) !== b64) {
      return [];
    }
    var binStr = window.atob(base64.replace(b64, ""));
    var buf = new Uint8Array(binStr.length);
    for (var i = 0, len = binStr.length; i < len; i++) {
      buf[i] = binStr.charCodeAt(i);
    }
    return buf;
  },
  /*
   *@param arr{Array}
   */
  encode64: function (arr) {
    var data = "";
    for (var i = 0, len = arr.length; i < len; i++) {
      data += String.fromCharCode(arr[i]);
    }
    return "data:image/jpeg;base64," + window.btoa(data);
  },
  showImage: function (file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  },

  imageResize: function (img, width, height, quality, callback) {
    var type = "image/jpeg";
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    // quality = options.quality || 0.8;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    canvas.toBlob(callback, type, quality);
  },
};
