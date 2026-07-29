export const serialize = <T>(arg: T): T => {
  return JSON.parse(JSON.stringify(arg));
};
