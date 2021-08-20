export const calcMonths = (startDate: Date, endDate: Date) => {
  return endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear())
}
export const getPeriod = (monthCount: number) => {
  const getPlural = (number: any, word: any) => {
    return (number === 1 && word.one) || word.other
  }
  const months = { one: 'month', other: 'months' }
  const years = { one: 'year', other: 'years' },
    m = monthCount % 12,
    y = Math.floor(monthCount / 12),
    result: string[] = []
  y && result.push(y + ' ' + getPlural(y, years))
  m && result.push(m + ' ' + getPlural(m, months))
  return result.join(' ')
}

const expTime = (startDate: any, endDate: any) => {
  startDate = startDate ? new Date(startDate) : ''
  endDate = endDate ? new Date(endDate) : ''
  const strStart = startDate ? startDate.toLocaleDateString('gb-GB', { year: 'numeric', month: 'long' }) : ''
  const strEnd = endDate ? ` - ${endDate.toLocaleDateString('gb-GB', { year: 'numeric', month: 'long' })}` : ' - Present'
  let period = ''
  if (startDate) {
    const dtStart = new Date(startDate)
    const dtEnd = endDate ? new Date(endDate) : new Date()
    const months = calcMonths(dtStart, dtEnd) + 1
    period = getPeriod(months)
  }
  return `${strStart}${strEnd}   - ${period}`
}

export default expTime
