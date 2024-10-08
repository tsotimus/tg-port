export const routerQueryParse = (str: string | string[] | undefined | null) => {
  const val = Array.isArray(str) ? str[0] : str;
  if (val === undefined || val === null) {
    return undefined;
  }
  return val;
};
