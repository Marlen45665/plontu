import { useState, useEffect } from "react";

const useHeaderColorEffect = (avatarImg) => {
  const [headerColor, setHeaderColor] = useState("transparent");

  useEffect(() => {
    const image = new Image();
    image.src = avatarImg;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);

      const imageData = context.getImageData(0, 0, image.width, image.height).data;
      const color = getAverageColor(imageData);

      setHeaderColor(`rgb(${color.r}, ${color.g}, ${color.b}, 0.3)`);
    };
  }, [avatarImg]);

  const getAverageColor = (imageData) => {
    let totalR = 0, totalG = 0, totalB = 0;
    const pixelCount = imageData.length / 4;

    for (let i = 0; i < imageData.length; i += 4) {
      totalR += imageData[i];
      totalG += imageData[i + 1];
      totalB += imageData[i + 2];
    }

    const averageR = Math.round(totalR / pixelCount);
    const averageG = Math.round(totalG / pixelCount);
    const averageB = Math.round(totalB / pixelCount);

    return {
      r: averageR,
      g: averageG,
      b: averageB,
    };
  };

  return headerColor;
};

export default useHeaderColorEffect;
