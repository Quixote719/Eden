import domtoimage from 'dom-to-image-more';

const getImage = (node: any) => domtoimage
    .toJpeg(node, { quality: 0.95 })
    .then(function (dataUrl: any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

export default getImage
