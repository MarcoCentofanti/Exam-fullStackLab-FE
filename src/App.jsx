import { Route, Routes, BrowserRouter } from "react-router-dom";

import DefaultLayout from "../Layouts/DefaultLayout";

import "./App.css";

import Home from "../pages/Homepage";
import Books from "../pages/Books";
import BooksDetails from "../components/BooksDetails";
import Contacts from "../pages/Contacts";
import CreateBook from "../pages/CreateBook";
import NotFound from "../pages/NotFound";
import EditBook from "../pages/EditBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={Home} />
            <Route path="/books" Component={Books} />
            <Route path="/books/create" Component={CreateBook} />
            <Route path="/books/:id/edit" Component={EditBook} />
            <Route path="/books/:id" Component={BooksDetails} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
