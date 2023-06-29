import React, { useState, useEffect } from "react";

function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      } else {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, 100); // Интервал в миллисекундах (настройте под свои потребности)
    
    return () => {
      clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    };
  }, [text]);

  return <div>{displayText}</div>;
}

export default TypewriterEffect;
