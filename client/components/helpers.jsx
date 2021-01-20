export const getPercentage = (current, max) => (100 * current) / max;

export const getValue = (percentage, max) => (max / 100) * percentage;

export const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

// eslint-disable-next-line max-len
export const getPricePercentage = (percentage, price) => Math.floor(((percentage / 100) ** 2) * price);
