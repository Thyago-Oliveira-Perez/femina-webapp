export const setTextColor = (color: string): string => {
  switch (color) {
    case 'primary':
        return '#fff';
      case 'secondary':
        return '#000';
      default:
        return '#9B4A46';
  }
};

export const setBorderColor = (
  borderColor: string
): string => {
  switch (borderColor) {
    case 'primary':
      return '#fff';
    case 'secondary':
      return '#000';
    default:
      return '#9B4A46';
  }
};
