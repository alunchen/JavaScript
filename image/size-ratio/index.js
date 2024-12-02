

/**
 * 
 *      原始尺寸（图片属性的物理尺寸） = 样式尺寸（css样式设置的尺寸） * 缩放倍率（devicePixelRatio）
        img.naturalWidth              style{  width:; height:; }
 *      
 */
const img = document.querySelector('img');
const { naturalWidth, naturalHeight } = img;
const { devicePixelRatio = 1 } = window;
const width = naturalWidth / devicePixelRatio;
const height = naturalHeight / devicePixelRatio;
img.style.width = `${width}px`;
img.style.height = `${height}px`