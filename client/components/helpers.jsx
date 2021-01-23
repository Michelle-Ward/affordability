export const getPercentage = (current, max) => (100 * current) / max;

export const getValue = (percentage, max) => (max / 100) * percentage;

export const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

// eslint-disable-next-line max-len
export const getPricePercentage = (percentage, price) => Math.floor(((percentage / 100) ** 2) * price);

export const calculateDownPaymentTotal = (
  price, downPayment,
) => Math.floor(price * (downPayment / 100));

export const calculatePrincipal = (
  price, downPayment, interestRate, loanType,
) => {
  const downPaymentTotal = calculateDownPaymentTotal(price, downPayment);
  const deductedTotal = price - downPaymentTotal;
  const totalWithInterest = deductedTotal * (1 + interestRate / 100);
  return Math.floor(totalWithInterest / loanType);
};

export const calculateTax = (price) => Math.floor(price * 0.000675);

export const calculateMortageInsurance = (principal) => Math.floor(principal * (14.65 / 100));

export const calculateAmount = (
  principal, tax, mortgageIns,
) => Math.floor(principal + tax + mortgageIns + 75);
