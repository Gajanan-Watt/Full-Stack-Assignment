import { useState } from "react";
import { Link } from "react-router-dom";
// import "./signin.css";
import axios from "axios";
export default function Signin() {
  const [data, setData] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(data);

    await axios
      .post("http://localhost:8888/employer", data)
      .then((res) => console.log(res.data.employee))
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="signin">
      <div className="signinWrapper">
        <h2>Signin Form</h2>
        <form onSubmit={handleClick}>
          <input
            placeholder="Enter your email"
            type="email"
            name="email_id"
            onChange={handleChange}
          />
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Link to="/register"><p>Create account</p></Link>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}