/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      'react-native-reanimated/plugin',
    ],
    presets: [
      'babel-preset-expo',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
