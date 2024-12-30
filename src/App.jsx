import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Add from "./Add";
import Transaction from "./Transaction";
import History from "./History";

export const Context = createContext();

function App() {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [year, setYear] = useState("");
  const [inventory, setInventory] = useState("");
  const [cards, setCards] = useState([]);
  const [bankId, setBankId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [transactions, setTransactions] = useState([]);

  return (
    <Context.Provider
      value={{
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
        bankId,
        setBankId,
        selectedCard,
        setSelectedCard,
        transactions,
        setTransactions,
      }}
    >
      <Router>
        <div className="flex flex-wrap gap-5 p-5 justify-center">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 w-[300px] h-auto p-5 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer text-white"
              >
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="flex justify-center p-3 text-xl font-mono bg-white bg-opacity-20 rounded-md mt-2">
                  {item.card}
                </div>
                <div className="flex justify-between mt-3 text-sm">
                  <div>
                    <span className="font-bold">Cvv2:</span> {item.cvv2}
                  </div>
                  <div>
                    <span className="font-bold">Year:</span> {item.year}
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-bold">Amount:</span>{" "}
                  {new Intl.NumberFormat().format(item.inventory)}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <nav>
            <ul className="bg-gray-800 text-white rounded-lg p-3 flex justify-around mx-5 mt-10 shadow-md">
              <li className="hover:text-yellow-400 transition duration-200">
                <Link to="/">Add</Link>
              </li>
              <li className="hover:text-yellow-400 transition duration-200">
                <Link to="/Transaction">Transaction</Link>
              </li>
              <li className="hover:text-yellow-400 transition duration-200">
                <Link to="/History">History</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
