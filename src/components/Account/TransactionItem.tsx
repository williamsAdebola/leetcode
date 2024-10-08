// import React from "react";
// import { H6, P, P2 } from "../Shared/headings/Headings";

// interface TransactionItemProps {
//   date: string;
//   company: string;
//   description: string;
//   amount: number | string;
//   transactionType: string;
// }

// const getColorFromTransactionType = (transactionType: string): string => {
//   switch (transactionType) {
//     case "debit":
//       return "text-red-500";
//     case "credit":
//       return "text-green-500";
//     case "pending":
//       return "text-yellow-500";
//     default:
//       return "";
//   }
// };

// const TransactionItem: React.FC<TransactionItemProps> = ({
//   date,
//   company,
//   description,
//   amount,
//   transactionType,
// }) => {
//   const color = getColorFromTransactionType(transactionType);

//   return (
//     <div className="flex flex-row gap-8">
//       <div>
//         <P2>{date}</P2>
//         <H6>{company}</H6>
//         <P>{description}</P>
//       </div>

//       <div className="ml-auto">
//         <P className={color}>${amount}</P>
//       </div>
//     </div>
//   );
// };

// export default TransactionItem;

import React from "react";
import { H6, P, P2 } from "../Shared/headings/Headings";

interface TransactionItemProps {
  date: string;
  company: string;
  description: string;
  amount: number | string;
  transactionType: string;
}

// Helper function to get a date X days ago
export const getDateDaysAgo = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Function to get the color based on the transaction type
const getColorFromTransactionType = (transactionType: string): string => {
  switch (transactionType) {
    case "debit":
      return "text-red-500";
    case "credit":
      return "text-green-500";
    case "pending":
      return "text-yellow-500";
    default:
      return "";
  }
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  date,
  company,
  description,
  amount,
  transactionType,
}) => {
  const color = getColorFromTransactionType(transactionType);

  return (
    <div className="flex flex-row gap-8">
      <div>
        <P2>{date}</P2>
        <H6>{company}</H6>
        <P>{description}</P>
      </div>

      <div className="ml-auto">
        <P className={color}>${amount}</P>
      </div>
    </div>
  );
};

export default TransactionItem;
