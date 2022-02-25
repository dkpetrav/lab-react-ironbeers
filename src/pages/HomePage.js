const imgURL =
  "../assets/beers.png";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}

export default HomePage;