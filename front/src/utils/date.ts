export const formatDateTime = (dateStr: string) => {
  const date = new Date(dateStr);

  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };
  const formattedDate = date.toLocaleDateString("es-ES", optionsDate);

  return `${formattedDate}`;
};
