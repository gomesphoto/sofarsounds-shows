/**
 * @desc generates random number
 * @return {number}
 */
export const randomID = () =>
  String(Math.random()).split('.')[1];
