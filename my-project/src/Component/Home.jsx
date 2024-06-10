const Home = () => {
  return (
    <div>
      <div className="Hero">
        <h1>Generation Thailand - Assessment</h1>
        <h2>Create User Here</h2>
      </div>
      <div className="Button">
        <button onClick={() => ("user")}>User Home Sector</button>
        <button onClick={() => ("admin")}>
          Admin Home Sector
        </button>
      </div>
    </div>
  );
};
export default Home;
