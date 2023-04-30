import { data } from "./data";

export const getTotalInvested = () => {
  return data
    .filter((transaction) => transaction.Type === "CUSTODY FEE")
    .map((transaction) => {
      const date = new Date(transaction.Date);
      return {
        date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
        type: transaction.Type,
        total: transaction["Total Amount"],
      };
    });
};
export const getTotalInDividens = () => {
  return data
    .filter((transaction) => transaction.Type === "DIVIDEND")
    .map((transaction) => {
      const date = new Date(transaction.Date);
      return {
        date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
        type: transaction.Type,
        total: transaction["Total Amount"],
      };
    });
};

export const getTotalWithdraw = () => {
  return data
    .filter((transaction) => transaction.Type === "CASH WITHDRAWAL")
    .map((transaction) => {
      const date = new Date(transaction.Date);
      return {
        date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
        type: transaction.Type,
        total: transaction["Total Amount"],
      };
    });
};
