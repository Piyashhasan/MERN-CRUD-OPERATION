import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  // --- get all user ---
  const getData = async () => {
    try {
      const res = await axios("http://localhost:5000/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   --- call the getData() ---
  useEffect(() => {
    getData();
  }, []);

  // --- handle delete ---
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="bg-white p-5 rounded-4">
        <Link to="/create" className="btn btn-primary mb-4">
          USER ADD +
        </Link>
        <div style={{ maxHeight: "350px", overflowY: "scroll" }}>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`}>
                        <button className="btn btn-success mx-2">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
