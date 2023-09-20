export default function formatDate(date: number) {
  const workDate = new Date(date);
  return `${workDate.toISOString().split('T')[0]} ${workDate.toLocaleTimeString(
    'ru-RU'
  )}`;
}
