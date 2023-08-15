import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateUser from "./components/CreateUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import Users from "./components/Users";

// --- router setup ---
const router = createBrowserRouter([
  { path: "/", element: <Users /> },
  { path: "/create", element: <CreateUser /> },
  { path: "/update/:id", element: <UpdateUser /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
