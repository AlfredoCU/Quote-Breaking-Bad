export const getQuote = async () => {
  try {
    const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("GET_QUOTE_ERROR: ", error);
  }
};
