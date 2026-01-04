import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") {
    // SSR — возвращаем дефолтные размеры
    return {
      width: 1200,
      height: 800
    };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    // Проверяем, что мы на клиенте
    if (typeof window === "undefined") return;

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    // Сразу обновляем размеры при монтировании
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
