const formatDataCards = (value: number): string =>
  Intl.NumberFormat().format(
    value,
  );
export default formatDataCards;
