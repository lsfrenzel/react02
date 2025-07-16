import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import StatusText from "./components/StatusText";
import Button from "./components/Button";
import Card from "./components/Card";
import Form from "./components/Form";
import ContactPage from "./pages/ContactPage";

import styles from "./App.module.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title />
                <Subtitle />
                <StatusText />
                <Button />
                <div style={{ display: "flex", gap: "16px", margin: "10px" }}>
                  <Card />
                  <Card />
                </div>
                <Form />
              </>
            }
          />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}