import { useEffect } from "react";

const useScroll = (listener: {
  (): void;
  (): void;
  (this: Window, ev: Event): any;
  (this: Window, ev: Event): any;
}) => {
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
};

export default useScroll;
