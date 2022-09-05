export const getPrevDay = (date: Date = new Date()): string => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);
  return formatDate(previous);
};

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

const formatDate = (date: Date) => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
};
