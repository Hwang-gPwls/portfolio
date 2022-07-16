const CheckIsInViewPort = (elem) => {
  if (!elem || !window) {
    return false;
  }

  const {
    top: elementTop,
    bottom: elementBottom,
  } = elem.getBoundingClientRect();

  return elementBottom > 0 && elementTop <= window.innerHeight;
};

export default CheckIsInViewPort;
