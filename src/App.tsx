import React from "react";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <NotesListPage />
    </div>
  );
};

export default App;
