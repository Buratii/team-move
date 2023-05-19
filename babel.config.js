module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@interfaces": "./src/interfaces",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@styles": "./src/styles"
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json"
          ],        
        },
      ], 
      ['styled-components'],
    ],
  };
};
