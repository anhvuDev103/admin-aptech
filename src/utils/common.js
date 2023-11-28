export function convertPrice(rawPrice) {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(rawPrice);

  return formattedPrice;
}
