import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import "./NavigationRoutes.css";
import CrudPage from "../Pages/CrudPage";

export const NavigationRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"><div className="loader"></div></div>}>
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<CrudPage />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};