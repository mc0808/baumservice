module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Если вы используете Expo Router, этот плагин обычно
      // уже включен в пресет, но иногда его стоит проверить
    ],
  };
};
