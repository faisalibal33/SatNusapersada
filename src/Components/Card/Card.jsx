import "./card.css";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";

const Card = ({ Users }) => {
  return (
    <>
      {Users?.map((users) => (
        <div className="cardContainer" key={users.id}>
          <div className="cardHeader">
            <h2 className="cardName">{users.name}</h2>
          </div>
          <div className="cardDetail">
            <table>
              <tbody className="cardBody">
                <tr>
                  <td>Username</td>
                  <td className="cardValue">{users.username}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="cardValue">{users.email}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="cardValue">
                    {users.address.street}, {users.address.suite},{" "}
                    {users.address.city}, {users.address.zipcode}
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td className="cardValue">{users.phone}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td className="cardValue">{users.website}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td className="cardValue">{users.company.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cardContact">
            <div className="cardContactUser">
              <a
                href={`mailto:${users.email}`}
                rel="noreferrer"
                target="_blank"
              >
                <AiTwotoneMail />
                <p> Email </p>
              </a>

              <a href={`tel:${users.phone}`} rel="noreferrer" target="_blank">
                <AiTwotonePhone />
                <p>Phone</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
