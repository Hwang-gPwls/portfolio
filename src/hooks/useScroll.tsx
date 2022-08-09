import { useEffect } from "react";

const useScroll = (listener) => {
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
};

export default useScroll;
