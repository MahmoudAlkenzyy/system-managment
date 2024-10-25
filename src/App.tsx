import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AddUser, Home, Login, MasterLayout, NotFound, ProtectedRoute, UserList } from "./components/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext/Authcontext";
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Login />
        // </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/dashboard",

      element: (
        <ProtectedRoute>
          <MasterLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "userList",
          element: <UserList />,
        },
        {
          path: "info",
          element: <div className="">info</div>,
        },
        {
          path: "addUser",
          element: <AddUser type="add" />,
        },
        {
          path: "editUser/:id",
          element: <AddUser type="update" />,
        },
        {
          path: "profile",
          element: <AddUser type="profile" />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
