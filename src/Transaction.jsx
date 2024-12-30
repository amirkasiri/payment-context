import React, { useEffect, useContext, useState } from "react";
import { Context } from "./App";

function Transaction() {
  const {
    bankId,
    cards,
    selectedCard,
    setSelectedCard,
    setCards,
    transactions,
    setTransactions,
  } = useContext(Context);

  const [transferAmount, setTransferAmount] = useState("");
  const [destinationCard, setDestinationCard] = useState("");

  useEffect(() => {
    if (bankId !== null) {
      const foundCard = cards.find((item) => item.id === bankId);
      if (foundCard) {
        setSelectedCard(foundCard);
      }
    }
  }, [bankId, cards, setSelectedCard]);

  const handleSelectCard = () => {
    const amount = parseFloat(transferAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const currentInventory = parseFloat(selectedCard.inventory);
    const newInventory = currentInventory - amount;

    if (newInventory < 0) {
      alert("Insufficient funds");
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === selectedCard.id
        ? { ...card, inventory: newInventory.toString() }
        : card
    );

    setCards(updatedCards);

  
    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      amount: amount,
      destination: destinationCard,
    };
    setTransactions([...transactions, newTransaction]);

    setTransferAmount("");
    setDestinationCard("");

    alert("Transfer successful!");
  };

  const handleDestinationCardChange = (e) => {
    const value = e.target.value;
    if (value.length <= 16) {
      setDestinationCard(value);
    }
  };

  const handleTransferAmountChange = (e) => {
    const value = e.target.value;
    if (value) {
      setTransferAmount(value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="flex flex-col gap-5 w-[500px] bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Make a Transaction
        </h1>

        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={selectedCard?.name || ""}
          placeholder="Name"
          disabled
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={selectedCard?.card || ""}
          placeholder="Card Number"
          disabled
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={selectedCard?.year || ""}
          placeholder="Expire Date"
          disabled
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={selectedCard?.cvv2 || ""}
          placeholder="CVV2"
          disabled
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={selectedCard?.inventory || ""}
          placeholder="Inventory"
          disabled
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={destinationCard}
          onChange={handleDestinationCardChange}
          placeholder="Destination Card"
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={transferAmount}
          onChange={handleTransferAmountChange}
          placeholder="Transfer Amount"
        />

        <button
          onClick={handleSelectCard}
          className="bg-green-600 text-white h-12 font-bold rounded-md shadow-md hover:bg-green-500 transition-all duration-300"
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Transaction;
