import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [mail, setMail] = useState("");
  const [value, setValue] = useState("");

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  const handle = () => {
    if (value == "Local Storage") {
      localStorage.setItem("Name", name);
      localStorage.setItem("Password", pwd);
      localStorage.setItem("Mail", mail);
      console.log("Save to local ");
    } else {
      console.log("select the data");
    }

    if (value == "mongod") {
      Axios.post("http:localhost:3001/insert", {
        customerName: name,
        phone: pwd,
        customeremail: mail,
      });
    } else {
      console.log("you didn't select the database");
    }
  };

  return (
    <div className="App">
      <h1>Customer info:</h1>
      <div className="customer">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label for="lname">Phone num</label>
          <input
            type="number"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <label for="lname">Email</label>
          <input
            type="email"
            id="lname"
            name="lastname"
            placeholder="Your email address.."
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <DropdownButton
            className="dropdo"
            alignRight
            title="Select the Database"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item className="dropdo" eventKey="Local Storage">
              Local Storage
            </Dropdown.Item>
            <Dropdown.Item className="dropdo" eventKey="MOngoDB">
              mongodb
            </Dropdown.Item>
          </DropdownButton>
          <h4>You selected {value}</h4>
          <button onClick={handle}>Submit</button>
        </form>
      </div>

      {localStorage.getItem("Name") && (
        <div>
          Name: <p>{localStorage.getItem("Name")}</p>
        </div>
      )}
      {localStorage.getItem("Password") && (
        <div>
          Password: <p>{localStorage.getItem("Password")}</p>
        </div>
      )}
      {localStorage.getItem("Mail") && (
        <div>
          Mail: <p>{localStorage.getItem("Mail")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
