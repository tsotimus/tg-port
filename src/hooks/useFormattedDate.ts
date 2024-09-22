import { format } from "date-fns";

const useFormattedDate = (date: Date): string => {
  return format(date, "LL");
};

export default useFormattedDate;
