import styles from './avatar.module.css';

export const firstLetters = (title?: string) => {
  if (title) {
    const listOfWords = title.toUpperCase().split(' ');
    const listOfFirstLetters = listOfWords.map((word) => word[0]);

    return listOfFirstLetters.length >= 2
      ? `${listOfFirstLetters[0]}${listOfFirstLetters[1]}`
      : listOfFirstLetters[0];
  }
  return 'A';
};

export const sizes = {
  '2xs': styles.avatar_2xs,
  xs: styles.avatar_xs,
  sm: styles.avatar_sm,
  md: styles.avatar_md,
  lg: styles.avatar_lg,
  xl: styles.avatar_xl,
  '2xl': styles.avatar_2xl,
};
