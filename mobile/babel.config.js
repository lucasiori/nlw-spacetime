module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugin: ['nativewind/babel', require.resolve('expo-router/babel')],
  }
}
