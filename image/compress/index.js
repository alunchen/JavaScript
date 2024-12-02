var filedom = document.getElementById("filedom");
var imgdom = document.getElementById("img");
var btn = document.getElementById("btn");

console.log('123123')
btn.onclick = function(){            
    var imgFile = filedom.files[0];
    console.log(imgFile)
    if(!imgFile){    
        alert("请选择图片文件！");
        return false;
    }

    
    showImage(imgFile,function(src){
        imgdom.src = src;
        console.log('imgdom', imgdom)
        EXIF.getData(imgdom, function(){
            const allTags = EXIF.getAllTags(this);
            const Orientation = EXIF.getTag(this, 'Orientation');
            console.log('allTags', allTags)
            console.log('Orientation', Orientation)
          });
    });

}

function showImage(file,callback){
    var reader = new FileReader();
    reader.onload = function(){
        callback(reader.result);
    }
    reader.readAsDataURL(file);
}