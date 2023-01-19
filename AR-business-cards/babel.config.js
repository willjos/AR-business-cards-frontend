module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};

module.exports = {
  presets: [
    ["module:metro-react-native-babel-preset"],
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { targets: { node: "current" } }], // add this
  ],
};
