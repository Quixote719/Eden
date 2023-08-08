import domtoimage from 'dom-to-image-more';

const getImage = (node: any) => domtoimage
    .toJpeg(node)
    .then(function (dataUrl: any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
    });

export default getImage
