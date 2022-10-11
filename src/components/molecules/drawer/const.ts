export const stylesInline = (themeColor?: string) => {
  return {
    drawer: { backgroundColor: themeColor ?? '#04111C' },
    showDrawer: {
      backgroundColor: themeColor ?? undefined,
      filter: 'brightness(1.2)',
    },
    button: { backgroundColor: themeColor ? themeColor : undefined },
  };
};
