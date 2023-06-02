import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const MinicartContext = createContext({});

export const MinicartStorage = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [qtItems, setQtItems] = useState(0);
  const [showMinicart, setShowMinicart] = useState(false);

  useEffect(() => {
    console.log(items);
    const priceTotal = items.reduce((total, item) => {
      return item.price * item.quantity + total;
    }, 0);
    setTotal(priceTotal);

    const qtTotal = items.reduce((total, item) => {
      return item.quantity + qtItems;
    }, 0);

    setTotal(priceTotal);
    setQtItems(qtTotal);
  }, [items]);

  function addToCart(product) {
    const itemExists = items.find(
      (item) => item.productId === product.productId,
    );
    if (!itemExists) {
      setItems([...items, { ...product, quantity: 1 }]);
    } else {
      setItems(
        items.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    }
  }

  function removeToCart(id) {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item,
        )
        .filter(Boolean),
    );
  }

  return (
    <MinicartContext.Provider
      value={{
        items,
        total,
        qtItems,
        addToCart,
        removeToCart,
        showMinicart,
        setShowMinicart,
      }}
    >
      {children}
    </MinicartContext.Provider>
  );
};

MinicartStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
