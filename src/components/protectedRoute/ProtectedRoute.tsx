import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const encodedToken = localStorage.getItem("userTkn");
  if (!encodedToken) return <Navigate to={"/"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
