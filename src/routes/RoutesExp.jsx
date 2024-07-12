import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/pages/Login";

const Home = lazy(() => import("../components/pages/Home"));
const UploadFile = lazy(() => import("../components/pages/UploadFile"));

function RoutesExp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/upload" element={<UploadFile />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesExp;
