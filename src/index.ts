export function getDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
  const day = today.getDate();

  return `${year}-${month}-${day}`;
}