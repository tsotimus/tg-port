export const routerQueryParse = (str: string | string[] | undefined) => {
  const val = Array.isArray(str) ? str[0] : str;
  return val;
};
