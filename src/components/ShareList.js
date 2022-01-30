import React, { useState, useEffect } from "react";

function ShareList() {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    fetchShares();
  }, []);

  const fetchShares = () => {
    fetch("https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares.json")
      .then((response) => response.json())
      .then((data) => setShares(data))
      .catch((err) => console.error(err))
      console.log(shares);
  };

  return (
    <div>
    </div>
  );
}

export default ShareList;
