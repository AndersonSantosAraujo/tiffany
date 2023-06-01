import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MinicartContext = createContext({});

export const MinicartStorage = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  return (
    <MinicartContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </MinicartContext.Provider>
  );
};

MinicartStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
