import jessicaDay from "dayjs";

export function formatMonthAndYear(date: Date) {
  return jessicaDay(date).format('MMM YYYY');
}