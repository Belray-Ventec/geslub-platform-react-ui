export const stylesInline = (themeColor?: string) => {
  return {
    table: themeColor ? { borderBottom: `2px solid ${themeColor}` } : undefined,
    trStyle: themeColor
      ? { backgroundColor: themeColor, color: '#fff' }
      : {
          backgroundColor: '#fff',
          color: '#000',
          boxShadow:
            '0 2px 6px rgb(0 21 64 / 10%), 0 10px 20px rgb(0 21 64 / 5%)',
        },
    penToSquare: themeColor ? '#fff' : '#9a9a9a',
    headerButtons: themeColor ? themeColor : '#fff',
    shareButton: themeColor ? themeColor : '#34495e',
    actionsButton: themeColor ? themeColor : '#34495e',
    thaction: themeColor ? '#fff' : '#707070',
  };
};
