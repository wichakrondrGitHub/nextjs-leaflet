async function getMovies() {
  let res = await fetch(`https://api.sampleapis.com/countries/countriess`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(res);
  return res.json();
}

async function Trending() {
  let results = await getMovies();

  return (
    <div>
      <h3>Movies</h3>
      {results &&
        results.map(({ capital }) => {
          return <li>{capital}</li>;
        })}
    </div>
  );
}
export default Trending;