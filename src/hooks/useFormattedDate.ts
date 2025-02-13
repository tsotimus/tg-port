import { format } from "date-fns";

const useFormattedDate = () => {

  const handleFormat = (date:Date) => format(date, "PP")
  
  return handleFormat;
};

export default useFormattedDate;
