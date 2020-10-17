export function getData() {
  return (
    fetch(`https://api.nbp.pl/api/exchangerates/tables/A`)
	  .then(data => data.json())
  );
}
  