import "./view.css";

const View = ({ setView }) => {
  return (
    <div>
      <div className="viewSelectWrapper">
        <p>Select View </p>
        <select onChange={(e) => setView(e.target.value)}>
          <option value="card">Card</option>
          <option value="table">Tabel</option>
        </select>
      </div>
    </div>
  );
};

export default View;
