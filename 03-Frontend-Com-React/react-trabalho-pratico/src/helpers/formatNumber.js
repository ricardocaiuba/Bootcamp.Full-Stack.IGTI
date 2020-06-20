const formatterBRL = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatter = Intl.NumberFormat("pt-BR");

function formatNumber(value, formatBRL) {
  let formatterReturn;
  if (formatBRL) {
    formatterReturn = formatterBRL.format(value);
  } else {
    formatterReturn = formatter.format(value);
  }
  return formatterReturn;
}

export { formatNumber };
