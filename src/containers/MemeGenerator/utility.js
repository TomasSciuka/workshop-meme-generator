import canvasTxt from "canvas-txt";

export const drawImage = (
  canvasId,
  imageUrl,
  textColor = "white",
  topText,
  bottomText
) => {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;
    canvasTxt.font = "Arial";
    canvasTxt.fontVariant = "small-caps";
    canvasTxt.fontSize = 40;
    canvasTxt.align = "center";
    canvasTxt.lineHeight = 50;
    canvasTxt.debug = false; //shows debug info
    canvasTxt.justify = false;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    if (topText != null) {
      canvasTxt.vAlign = "top";
      canvasTxt.drawText(ctx, topText, 0, 0, 480, 480);
    }

    if (bottomText != null) {
      canvasTxt.vAlign = "bottom";
      canvasTxt.drawText(ctx, bottomText, 0, -20, 480, 480);
    }
  };
  img.src = imageUrl;
};
