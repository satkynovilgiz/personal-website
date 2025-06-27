const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  env: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  },
};
