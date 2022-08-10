import { useEffect } from "react";

const useResize = (listener: {
  (): void;
  (this: Window, ev: UIEvent): any;
  (this: Window, ev: UIEvent): any;
}) => {
  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
};

export default useResize;
