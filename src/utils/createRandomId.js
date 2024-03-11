const createRandomId = () => {
  const currentDate = new Date();
  const randomNumb = +Math.random().toString().split('.')[1];
  const id = Math.trunc(
    currentDate.getTime() +
      currentDate.getMilliseconds() * randomNumb +
      randomNumb
  );
  return Number(id)
    .toString(32)
    .padStart(15, currentDate.getMilliseconds().toString());
};

export default createRandomId;
