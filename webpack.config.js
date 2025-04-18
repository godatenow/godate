// const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// module.exports = async function (env, argv) {
//   const config = await createExpoWebpackConfigAsync({
//     ...env,
//     babel: {
//       dangerouslyAddModulePathsToTranspile: [
//         '@react-navigation/native',
//         '@react-navigation/stack',
//         '@react-navigation/native-stack',
//         '@react-navigation/elements',
//         'react-native-safe-area-context',
//         'react-native-screens',
//         'react-native-gesture-handler',
//       ],
//     },
//     resolve: {
//       alias: {
//         'react-native$': 'react-native-web',
//         'react-native-gesture-handler': 'react-native-web/dist/modules/GestureHandler',
//       },
//       extensions: ['.web.js', '.js', '.jsx', '.json'],
//       fallback: {
//         crypto: require.resolve('crypto-browserify'),
//         stream: require.resolve('stream-browserify'),
//         buffer: require.resolve('buffer/'),
//       },
//     },
//   }, argv);

//   // Add a rule for handling .web.js files
//   config.module.rules.push({
//     test: /\.web\.js$/,
//     use: {
//       loader: 'babel-loader',
//       options: {
//         presets: ['@babel/preset-env', '@babel/preset-react'],
//         plugins: ['@babel/plugin-transform-runtime']
//       }
//     }
//   });

//   return config;
// }; 