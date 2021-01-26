export const getPercentage = (current, max) => (100 * current) / max;

export const getValue = (percentage, max) => (max / 100) * percentage;

export const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

// eslint-disable-next-line max-len
export const getPricePercentage = (percentage, price) => Math.floor(((percentage / 100) ** 2) * price);

export const calculateDownPaymentTotal = (
  price, downPayment,
) => Math.floor(price * (downPayment / 100));

export const calculatePrincipal = (
  price, downPayment, interestRate, loanType = 30,
) => {
  const downPaymentTotal = calculateDownPaymentTotal(price, downPayment);
  const principal = price - downPaymentTotal;
  let totalInterest;
  const r = (interestRate / 1200);

  if (principal > 0) {
    totalInterest = (((principal * r) * (12 * loanType)) * 0.5695);
  } else {
    totalInterest = (1 + interestRate / 100);
  }

  return Math.floor(((principal + totalInterest) / (loanType)));
};

export const calculateTax = (price) => Math.floor(price * 0.000675);

export const calculateMortageInsurance = (price, downPayment) => {
  const downPaymentTotal = calculateDownPaymentTotal(price, downPayment);
  const principal = price - downPaymentTotal;
  return Math.floor((principal * (5.285 / 100)) / 12);
};

export const calculateAmount = (
  price, principal, tax, mortgageIns,
) => (price ? Math.floor(principal + tax + mortgageIns) : 0);
