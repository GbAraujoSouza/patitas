const CurrencyFormater = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
});
export function formatCurrency(number: number) {
  return CurrencyFormater.format(number);
}
