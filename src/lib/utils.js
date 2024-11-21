import quotes from "./quotes.json";

export function getQuotes() {
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(Math.random() * quotes.length);
    const y = Math.floor(Math.random() * quotes.length);
    const tmp = quotes[x];
    quotes[x] = quotes[y];
    quotes[y] = tmp;
  } 
  const wait = "/".repeat(25);
  for (let i = 0; i < quotes.length; i++) 
    quotes[i] += wait;
  return quotes;
}
