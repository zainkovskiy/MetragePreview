export const useNumberTriad = (number: number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};
