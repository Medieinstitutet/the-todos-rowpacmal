const getCurrentMonth = (monthIndex) => {
  switch (+monthIndex) {
    case 0:
      return 'January';

    case 1:
      return 'February';

    case 2:
      return 'March';

    case 3:
      return 'April';

    case 4:
      return 'May';

    case 5:
      return 'June';

    case 6:
      return 'July';

    case 7:
      return 'August';

    case 8:
      return 'September';

    case 9:
      return 'October';

    case 10:
      return 'November';

    case 11:
      return 'December';

    default:
      return 'Unknown';
  }
};

const getTodaysDate = () => ({
  full: new Date().toLocaleDateString(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
  day: new Date().getDate(),
  month: getCurrentMonth(new Date().getMonth()),
  year: new Date().getFullYear(),
  time: new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  }),
  epoch: new Date().getTime(),
});

export default getTodaysDate;
