export const dotsLeft = '... ';
export const dotsRight = ' ...';
export const dotsInitial = '...';

export const firstPage = (paginator: {
  totalItems: number;
  totalPages: number;
  previousPage: number;
}) => {
  return Math.ceil(
    (paginator.totalItems / paginator.totalPages) * paginator.previousPage + 1
  );
};
export const lastPage = (paginator: {
  totalItems: number;
  totalPages: number;
  page: number;
}) => {
  return Math.ceil(
    (paginator.totalItems / paginator.totalPages) * paginator.page
  );
};

export const stylesInline = (themeColor?: string) => {
  return {
    button: themeColor
      ? {
          backgroundColor: themeColor,
          borderColor: themeColor,
          color: '#fff',
        }
      : undefined,
  };
};
