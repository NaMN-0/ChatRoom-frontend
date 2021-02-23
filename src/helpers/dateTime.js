export const timeConvert = (timestamp) => {
  const newDate = new Date(timestamp);
  const time = `${newDate.getHours()}:${newDate.getMinutes()}`;
  return time;
}

export const dateConvert = (timestamp) => {
  const newDate = new Date(timestamp); 
  const date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
  return date;
}
