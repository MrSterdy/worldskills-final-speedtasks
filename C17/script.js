const totalX = 5;
const totalY = 3;

const image = new Image();
image.onload = cutImageUp;
image.src = './image.jpg';

const widthOfOnePiece = image.width / totalX;
const heightOfOnePiece = image.height / totalY;

function cutImageUp() {
    const imagePieces = [];
    for(let y = 0; y < totalY; ++y) {
        for(let x = 0; x < totalX; ++x) {
            const canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            const context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    const matrix = document.getElementById("matrix");

    for (let height = 0; height < totalY; height++) {
        const collection = document.createElement("div");

        for (let width = 0; width < totalX; width++) {
            const dataUrl = imagePieces[height * totalX + width];
            const img = document.createElement("img");
            img.src = dataUrl;
            collection.append(img);
        }

        matrix.append(collection);
    }
}