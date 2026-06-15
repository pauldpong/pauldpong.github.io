/** */
export function formatDate(date: string): string {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateAsFormattedString = dateFormatter.format(new Date(date));

  return dateAsFormattedString;
}
