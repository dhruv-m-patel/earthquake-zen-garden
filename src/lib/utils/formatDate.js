export default function formatDate(timestamp) {
  if (!timestamp) {
    return null;
  }

  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'pm' : 'am';
  const time =
    amPm === 'pm' ? `${24 - hours}:${minutes} PM` : `${hours}:${minutes} AM`;

  return `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getDate()}, ${date.getFullYear()} ${time}`;
}
