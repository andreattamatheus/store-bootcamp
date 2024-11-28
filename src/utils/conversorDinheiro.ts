export const useFormatarDinheiro =
  (currency: string, country: string) => (valor: number) => {
    return new Intl.NumberFormat(country, {
      style: "currency",
      currency: currency,
    }).format(valor);
  };
