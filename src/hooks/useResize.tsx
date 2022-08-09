import { useEffect } from "react";

const useResize = (listener) => {
  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
};

export default useResize;
