import { format } from "date-fns";

const useFormattedDate = (date: Date): string => {
  return format(date, "PP");
};

export default useFormattedDate;
