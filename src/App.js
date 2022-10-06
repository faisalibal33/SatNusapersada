import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import "./App.css";
import { FiUserX } from "react-icons/fi";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import View from "./Components/View/View";
import Loading from "./Components/Loading/Loading";

const App = () => {
  const [usersData, setUsersData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [view, setView] = useState("card");
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((data) => {
            return data.json();
          })
          .then((data) => setUsersData(data));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const Users = usersData?.filter((data) =>
    data[searchBy].toString().toLowerCase().includes(search)
  );

  return (
    <div className="app">
      <div className="titleWrapper">
        <h1>SAT NUSAPERSADA</h1>
        <h2>Faisal Iqbal</h2>
      </div>
      <div className="fiturWrapper">
        <View setView={setView} />
        <Search setSearch={setSearch} setSearchBy={setSearchBy} />
      </div>
      {loading && <Loading />}
      {!loading && error ? <h1>Error: {error}</h1> : null}
      {Users?.length > 0 ? (
        <div className="cardWrapper">
          {view === "card" ? <Card Users={Users} /> : <Table Users={Users} />}
        </div>
      ) : (
        <div
          className="userNotFound"
          style={{ display: loading ? "none" : "flex" }}
        >
          <FiUserX />
          <p>User not found</p>
        </div>
      )}
    </div>
  );
};

export default App;
