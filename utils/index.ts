export function classNames (...classes: any[string]) {
    return classes.filter(Boolean).join(' ')
  }

export function getFormattedDate (date: Date) {
  return date
    ? new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''
}
