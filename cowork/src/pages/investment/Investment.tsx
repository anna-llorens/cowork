import {
  getTotalInDividens,
  getTotalInvested,
  getTotalWithdraw,
} from "./helpers";

export const Investment = () => {
  return (
    <>
      {getTotalInvested().map((transaction, i) => (
        <div key={Number(i)}>{transaction.total}</div>
      ))}
    </>
  );
};
