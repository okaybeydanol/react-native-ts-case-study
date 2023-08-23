// NAMES OF WEEK
export const weekday = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

// DATE
const newDate = new Date();
const today = newDate.getDate();
const todayName = weekday[newDate.getDay()];
const todayDate = new Date(
  newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000,
);
export const date = {
  today,
  todayName,
  todayDate,
};

// NUMBERS
export const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  twentyOne: 21,
  twentyTwo: 22,
  twentyThree: 23,
  twentyFour: 24,
  twentyFive: 25,
  twentySix: 26,
  twentySeven: 27,
  twentyEight: 28,
};
// FONT FAMILY
export const fontFamily = {
  montserrat: {
    300: 'Montserrat-Thin',
    400: 'Montserrat-Regular',
    500: 'Montserrat-Medium',
    600: 'Montserrat-SemiBold',
    700: 'Montserrat-Bold',
  },
};

export const baseUrl = 'https://5fc9346b2af77700165ae514.mockapi.io/';

export const transparent = 'transparent';
