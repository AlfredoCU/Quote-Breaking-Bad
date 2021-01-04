import { useState, useEffect } from "react";
import { Quote } from "../components/Quote";
import { getQuote } from "../helpers/apiQuote";

export const App = () => {
  const [data, setData] = useState({});

  //* Actualizara el estado cada vez que se genere un click.
  const handleQuoteChange = () => {
    getQuote()
      .then(data => setData(...data))
      .catch(error => console.error("HANDLE_QUOTE_CHANGE_ERROR: ", error));
  };

  //* Sólo se ejecuta una vez después del return del componente.
  useEffect(() => {
    handleQuoteChange();
  }, []);

  return (
    <div className="container">
      <Quote quote={data.quote} author={data.author} />
      <button type="button" onClick={handleQuoteChange}>
        Obtener una nueva frase
      </button>
    </div>
  );
};
