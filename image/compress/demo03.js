function getSegments(rawImage, callback) {
  if (rawImage instanceof Blob) {
      var that = this;
      var fileReader = new FileReader();
      fileReader.onload = function() {
          that.getSegments(fileReader.result, callback);
      };
      fileReader.readAsArrayBuffer(rawImage);
  } else {
      if (!rawImage.length && !rawImage.byteLength) {
          return [];
      }
      var head = 0,
          segments = [];
      var length,
          endPoint,
          seg;
      var arr = [].slice.call(new Uint8Array(rawImage), 0);

      while (1) {
          if (arr[head] === 0xff && arr[head + 1] === 0xda) { //Start of Scan 0xff 0xda  SOS
              break;
          }

          if (arr[head] === 0xff && arr[head + 1] === 0xd8) { //Start of Image 0xff 0xd8  SOI
              head += 2;
          } else { //找到每个marker
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
}

function getEXIF(segments) {
  if (!segments.length) {
      return [];
  }
  var seg = [];
  for (var x = 0; x < segments.length; x++) {
      var s = segments[x];
      //TODO segments
      if (s[0] === 0xff && s[1] === 0xe1) { // app1 exif 0xff 0xe1
          seg = seg.concat(s);
      }
  }
  return seg;
}


function insertEXIF(resizedImg, exifArr, callback) {
  if (resizedImg instanceof Blob) {
      var that = this;
      var fileReader = new FileReader();
      fileReader.onload = function() {
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
}