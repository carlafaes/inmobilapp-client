export function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export const getColorRamdom = () => {
  return `rgb(${getRandomArbitrary(0, 256)},${getRandomArbitrary(
    0,
    256
  )},${getRandomArbitrary(0, 256)})`;
};
