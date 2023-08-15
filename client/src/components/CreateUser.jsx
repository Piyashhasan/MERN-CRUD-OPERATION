import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigator = useNavigate();

  // --- create user / POST method
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newUser = {
        name,
        email,
        age,
      };
      const res = await axios.post("http://localhost:5000/users", newUser);
      if (res) {
        navigator("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      <div className="py-5">
        <Link to="/">
          {" "}
          <button className="btn btn-warning fw-bold">Back to Home</button>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 w-50 mx-auto rounded-4"
        >
          <h3 className="text-center">Create User</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="form-control"
              placeholder="age"
            />
          </div>
          <button
            disabled={!name || !email || !age}
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
