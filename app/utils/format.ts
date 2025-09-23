export function formatNumberToKNotation(num: number): string {
  const numInt = Math.floor(num);
  if (numInt < 1000) {
    return numInt.toString();
  }

  if (numInt < 1000000) {
    const thousands = Math.floor(numInt / 1000);
    const decimal = Math.floor((numInt % 1000) / 100);
    return `${thousands}.${decimal}K`;
  }

  // For numbers >= 1 million, show as "> 999.9K"
  return '> 999.9K';
}

