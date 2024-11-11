/**
 * Convert a date to a more detailed relative time string, such as
 * "2 years and 5 months of experience" or "1 month of experience"
 */
export function getDetailedRelativeTimeString(
  date: Date | number,
  _lang = navigator.language,
): string {
  // Permitir data ou timestamp
  const startDate = typeof date === 'number' ? new Date(date) : date
  const now = new Date()

  // Calcula diferença em anos e meses
  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()

  // Ajuste para meses negativos, se a data do mês de início for maior que o mês atual
  if (months < 0) {
    years -= 1
    months += 12
  }

  // Formatação do texto final
  let timeString = ''
  if (years > 0) {
    timeString += `${years} ${years === 1 ? 'ano' : 'anos'}`
  }
  if (months > 0) {
    if (timeString) timeString += ' e '
    timeString += `${months} ${months === 1 ? 'mês' : 'meses'}`
  }

  // Se não houver anos nem meses, consideramos menos de um mês
  if (!timeString) {
    timeString = 'menos de um mês'
  }

  return timeString
}