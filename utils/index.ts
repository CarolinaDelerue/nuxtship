export function classNames (...classes: any[string]) {
    return classes.filter(Boolean).join(' ')
  }

  export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
