const React = require("react-native");

const { PixelRatio } = React;
const pixelRatio = PixelRatio.get();

const Dimensions = React.Dimensions || require("Dimensions"),
  { width, height } = Dimensions.get("window");

const vw = width / 100;
const vh = height / 100;

const vmin = Math.min(vw, vh);
const vmax = Math.max(vw, vh);

const normalizePixels = size => {
  if (pixelRatio == 2) {
    return size * vw / 4;
  }
  if (pixelRatio == 3) {
    return size;
  }
  return size * pixelRatio;
};

module.exports = {
  normalizePixels: normalizePixels
};
