import React from "react";
import { Supply } from "@/interfaces/interfaces";
import { saveStock, updateStock } from "@/redux/reducer";
import { useDispatch } from "react-redux";

const useDataStock = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const stocks = localStorage.getItem("stocks");
      if (stocks) {
        dispatch(saveStock(JSON.parse(stocks)));
      }
    }
  }, [dispatch]);

  const saveStockStorage = (stocks: Supply[]) => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };

  const addStockStorage = (stock: Supply) => {
    const stocksStorage = localStorage.getItem("stocks");
    if (stocksStorage) {
      const parsedStocksStorage = JSON.parse(stocksStorage);
      parsedStocksStorage.push(stock);
      localStorage.setItem("stocks", JSON.stringify(parsedStocksStorage));
    }
  };

  const updateStocksStorage = (updatedStock: Supply) => {
    const stocksStorage = localStorage.getItem("stocks");
    if (stocksStorage) {
      const parsedStocksStorage = JSON.parse(stocksStorage);
      const updatedStocks = parsedStocksStorage.map((stock: Supply) =>
        stock.id === updatedStock.id ? updatedStock : stock
      );
      localStorage.setItem("stocks", JSON.stringify(updatedStocks));
      dispatch(updateStock(updatedStock));
    } else {
      localStorage.setItem("stocks", JSON.stringify([updatedStock]));
    }
  };
  const clearStocksStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("stocks");
    }
  };

  return {
    saveStockStorage,
    addStockStorage,
    updateStocksStorage,
    clearStocksStorage,
  };
};

export default useDataStock;
