export const timeConvert = (timestamp) => {

  const newDate = new Date(timestamp);
  const time = `${("0"+newDate.getHours()).slice(-2)}:${("0"+newDate.getMinutes()).slice(-2)}`;
  return time;

}

export const dateConvert = (timestamp) => {
  const newDate = new Date(timestamp); 
  const date = `${("0"+newDate.getDate()).slice(-2)}/${("0"+newDate.getMonth()).slice(-2)}/${("0"+newDate.getFullYear()).slice(-4)}`;
  return date;
}
