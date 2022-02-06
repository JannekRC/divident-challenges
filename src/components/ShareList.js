import React, { useState, useEffect } from "react";

function ShareList() {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    fetchShares();
  }, []);

  const fetchShares = () => {
    fetch(
      "https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares.json"
    )
      .then((response) => response.json())
      .then((data) => setShares(data))
      .catch((err) => console.error(err));
    console.log(shares);
  };


 // HEKLLO ASKDKJSDJK
 /* ITS ME PLEASE WORK */
 
 // HELÆLO FROM JANNEK

 
  let calculateShares = () => {
    for (let i = 0; i < shares.length; i++) {
      console.log(`Share: ${shares[i].share}`);
      console.log(`Company: ${shares[i].company}`);
      console.log(`Price: ${shares[i].price}`);
      console.log(
        `Last year dividend: ${shares[i].dividendHistory[0].dividend}`
      );
      console.log(
        `Dividend yield-%: ${(
          (shares[i].dividendHistory[0].dividend / shares[i].price) *
          100
        ).toFixed(1)}`
      );
      console.log(
        "5-year average dividend yield-%: " +
          (
            ((shares[i].dividendHistory[0].dividend +
              shares[i].dividendHistory[1].dividend +
              shares[i].dividendHistory[2].dividend +
              shares[i].dividendHistory[3].dividend +
              shares[i].dividendHistory[4].dividend) /
              5 /
              shares[i].price) *
            100
          ).toFixed(1)
      );
      console.log(
        `5-year weighted average dividend yield-%: ${
          (shares[i].dividendHistory[0].dividend / shares[i].price) * 100
        }`
      );
    }
  };

  return (
    <div>
      <h1>Share List</h1>
      <h3>Jannek Christensen & Zoltán Szikszó</h3>
      <p>{calculateShares()}</p>
    </div>
  );
}

export default ShareList;
