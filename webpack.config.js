const path = require('path');

module.exports = {
  entry: './src/call.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
