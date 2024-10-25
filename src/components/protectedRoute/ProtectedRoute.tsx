import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const encodedToken = localStorage.getItem("userTkn");
  if (!encodedToken) return <Navigate to={"/"} />;
  // if (encodedToken) return <Navigate to={"/dashboard/home"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
