const timeOfStamp = () => {
  const currentdate = new Date();
  const timeStamp = `Card born: ${currentdate.getDate()}/${
    currentdate.getMonth() + 1}/${
    currentdate.getFullYear()} @ ${
    currentdate.getHours()}:${
    currentdate.getMinutes()}:${
    currentdate.getSeconds()}`;
  return timeStamp;
};

export default timeOfStamp;
