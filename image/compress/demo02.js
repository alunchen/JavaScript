function imageResize(img, width, height, quality,callback) {
  var type = "image/jpeg";
  var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
  // quality = options.quality || 0.8;
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  canvas.toBlob(callback, type, quality);
}