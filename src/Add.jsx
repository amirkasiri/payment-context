import React, { useState, useContext } from "react";
import { Context } from "./App";

function Add() {
  const {
    name,
    setName,
    card,
    setCard,
    cvv2,
    setCvv2,
    year,
    setYear,
    inventory,
    setInventory,
    cards,
    setCards,
  } = useContext(Context);

  function handlerName(event) {
    setName(event.target.value);
  }

  function handlerCard(event) {
    const value = event.target.value;
    if (value.length <= 16) {
      setCard(value);
    }
  }

  function handlerCvv2(event) {
    const value = event.target.value;
    if (value.length <= 4) {
      setCvv2(event.target.value);
    }
  }

  function handlerYear(event) {
    const value = event.target.value;
    if (value.length <= 4) {
      setYear(value);
    }
  }

  function handlerInventory(event) {
    const value = event.target.value;
    setInventory(value);
  }

  function handlerData() {
    if (!name || !card || !cvv2 || !year || !inventory) {
      alert("Please fill out all the inputs....");
      return;
    }

    const newCard = {
      id: Date.now(),
      name: name,
      card: card,
      cvv2: cvv2,
      year: year,
      inventory: inventory,
    };

    setCards([...cards, newCard]);

    setName("");
    setCard("");
    setCvv2("");
    setYear("");
    setInventory("");

    alert("Card added successfully!");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="flex flex-col gap-5 mt-9 w-[500px] bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Add Your Card
        </h1>

        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          value={name}
          onChange={handlerName}
          placeholder="Name"
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="number"
          value={card}
          onChange={handlerCard}
          placeholder="Card Number"
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="number"
          value={cvv2}
          onChange={handlerCvv2}
          placeholder="CVV2"
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="number"
          value={year}
          onChange={handlerYear}
          placeholder="Year & Month"
        />
        <input
          className="h-14 rounded-lg p-4 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          value={inventory}
          onChange={handlerInventory}
          placeholder="Inventory"
        />

        <button
          onClick={handlerData}
          className="bg-purple-600 text-white h-12 font-bold rounded-md shadow-md hover:bg-purple-500 transition-all duration-300"
        >
          Add Card
        </button>
      </div>
    </div>
  );
}

export default Add;
