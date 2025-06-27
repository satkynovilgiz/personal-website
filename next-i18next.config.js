const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  ns: ['common'],
  localePath: path.resolve('./public/locales'),  // Добавь эту строку
};
