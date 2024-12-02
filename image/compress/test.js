var filedom = document.getElementById("file");
var imgdom = document.getElementById("img");
var btn = document.getElementById("btn");

btn.onclick = function(){            
    var imgFile = filedom.files[0];

    if(!imgFile){    
        alert("请选择图片文件！");
        return false;
    }

    showImage(imgFile,function(src){
        imgdom.src = src;
        imgdom.onload = function(){
            imageResize(imgdom,400,225,1,function(blob){
                ImageTool.getSegments(imgFile,function(segments){
                    var exif = ImageTool.getEXIF(segments);//获取exif信息
                    ImageTool.insertEXIF(blob,exif,function(newImage){
                            showImage(new Blob([newImage],{type : "image/jpeg"}),function(src){
                                var img = new Image();
                                img.src = src;
                                document.body.appendChild(img);
                            });
                    });
                });//获取 分割 segments
            });
        }
    });

}

function showImage(file,callback){
    var reader = new FileReader();
    reader.onload = function(){
        callback(reader.result);
    }
    reader.readAsDataURL(file);
}

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


function modifyFileList() {
  const inputElement = document.getElementById('fileInput');
  const originalFiles = inputElement.files;
 
  // 假设我们要添加一个新的文件到文件列表中
  const newFile = new File(["Hello, world!"], "hello.txt", {
    type: "text/plain",
  });
 
  // 创建一个新的FileList对象
  const newFileList = new DataTransfer().files;
  for (let i = 0; i < originalFiles.length; i++) {
    newFileList.append(originalFiles[i]);
  }
  newFileList.append(newFile);
 
  // 将修改后的FileList设置回input元素
  inputElement.files = newFileList;
}