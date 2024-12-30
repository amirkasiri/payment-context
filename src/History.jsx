import React, { useContext } from "react";
import { Context } from "./App";

function History() {
  const { transactions } = useContext(Context); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-[700px] bg-white p-6 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Transaction History
        </h1>
        {transactions && transactions.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex justify-between items-center py-4 px-4 hover:bg-gray-100 rounded-lg transition-all"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">Date:</p>
                  <p className="text-gray-600">{transaction.date}</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">Amount:</p>
                  <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                    ${transaction.amount}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">To:</p>
                  <p className="text-gray-600">{transaction.destination}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No transactions available.</p>
        )}
      </div>
    </div>
  );
}

export default History;
