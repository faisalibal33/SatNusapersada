import "./table.css";

const Table = ({ Users }) => {
  return (
    <table className="tableUsers">
      <thead>
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Address</td>
          <td>Phone</td>
          <td>Website</td>
          <td>Company Name</td>
        </tr>
      </thead>
      <tbody className="tbody">
        {Users?.map((users) => (
          <tr tabIndex="0" key={users.id}>
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>
              <a
                href={`mailto:${users.email}`}
                rel="noreferrer"
                target="_blank"
              >
                {users.email}
              </a>
            </td>
            <td>
              {users.address.street}, {users.address.suite},{" "}
              {users.address.city}, {users.address.zipcode}
            </td>
            <td>
              <a href={`tel:${users.phone}`} rel="noreferrer" target="_blank">
                {users.phone}
              </a>
            </td>
            <td>{users.website}</td>
            <td>{users.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
