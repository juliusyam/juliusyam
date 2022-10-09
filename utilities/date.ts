import jessicaDay from "dayjs";

export function formatMonthAndYear(date: Date) {
  return jessicaDay(date).format('MMM YYYY');
}

export function sortByCloserDate(date1: Date, date2: Date) {
  return jessicaDay(date1).valueOf() - jessicaDay(date2).valueOf()
}