import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigator = useNavigate();

  // --- fetch date depend on id value ---
  const getUserByID = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${id}`);
      if (res) {
        const { name, email, age } = res.data;
        setName(name);
        setEmail(email);
        setAge(age);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   --- call getUserByID() ---
  useEffect(() => {
    getUserByID();
  }, []);

  //   --- handle update ---
  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const updateUser = {
        name,
        email,
        age,
      };
      const res = await axios.patch(
        `http://localhost:5000/users/${id}`,
        updateUser
      );
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
          onSubmit={handleUpdate}
          className="bg-white p-5 w-50 mx-auto rounded-4"
        >
          <h3 className="text-center">Update User</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
