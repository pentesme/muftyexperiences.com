import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Layout
import LayoutWrapper from "./components/layout/LayoutWrapper";

// Halaman
import Home from "./Home";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Communication from "./Communication";
import About from "./About";
import Profile from "./Profile";
import Terms from "./Terms";
import Privacy from "./Privacy";
import FAQ from "./FAQ";
import Admin from "./components/admin/Admin";
import NotFound from "./404";
import Login from "./features/auth/Login";

// Tracking
import AnalyticsAndPixel from "./components/tracking/AnalyticsAndPixel";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnalyticsAndPixel /> {/* ✅ GA & Pixel dari .env */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <Home />
            </LayoutWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <LayoutWrapper>
              <Blog />
            </LayoutWrapper>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <LayoutWrapper>
              <BlogDetail />
            </LayoutWrapper>
          }
        />
        <Route
          path="/communication"
          element={
            <LayoutWrapper>
              <Communication />
            </LayoutWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <LayoutWrapper>
              <About />
            </LayoutWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <LayoutWrapper>
              <Profile />
            </LayoutWrapper>
          }
        />
        <Route
          path="/terms"
          element={
            <LayoutWrapper>
              <Terms />
            </LayoutWrapper>
          }
        />
        <Route
          path="/privacy"
          element={
            <LayoutWrapper>
              <Privacy />
            </LayoutWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <LayoutWrapper>
              <FAQ />
            </LayoutWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <LayoutWrapper>
              <Admin />
            </LayoutWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
