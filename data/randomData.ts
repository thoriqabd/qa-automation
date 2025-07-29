
export const randomsTitle = ['1', 'A', 'TV', 'Elshinta', 'Al', 'B'];
export const randomCategory = ['Local', 'un', 'l', 'R', 'S'];

export function randomItem(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}
