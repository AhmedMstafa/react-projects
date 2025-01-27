const { grey } = require('@mui/material/colors');

const getDesignTokens = (myMode) => ({
  palette: {
    // @ts-ignore
    mode: myMode,
    ...(myMode === 'light'
      ? {
          ahmed: {
            main: '#647488',
          },
          favColor: {
            main: grey[500],
          },
        }
      : {
          ahmed: {
            main: '#teal',
          },
          favColor: {
            main: grey[700],
          },
        }),
  },
});

export default getDesignTokens;
