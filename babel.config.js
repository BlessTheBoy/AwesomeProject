module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '@constants': './src/shared/utils/constants',
          '@components': './src/shared/components',
          '@assets': './src/shared/assets',
          '@vectors': './src/shared/vectors',
          '@styles': './src/shared/styles',
          '@screens': './src/screens',
          '@navigator': './src/navigator',
          '@': './src',
          '@root': ['./'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
