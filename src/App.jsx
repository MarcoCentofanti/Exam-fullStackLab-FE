import { Route, Routes, BrowserRouter } from "react-router-dom";

import DefaultLayout from "../Layouts/DefaultLayout";

import "./App.css";

import Home from "../pages/Homepage";
import Books from "../pages/Books";
import BooksDetails from "../components/BooksDetails";
import Contacts from "../pages/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={Home} />
            <Route path="/books" Component={Books} />
            <Route path="/books/:id" Component={BooksDetails} />
            <Route path="/contacts" Component={Contacts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
