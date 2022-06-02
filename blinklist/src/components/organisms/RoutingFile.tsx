import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import BookPage from "./BookPage/BookPage";
import EntraprenaurPage from "../templates/EntraprenaurPage/EntraprenaurPage";
import { useEffect, useState } from "react";

import book1 from "../Assets/book1.png"
import book2 from "../Assets/book2.png";
import book3 from "../Assets/book3.png";
import book4 from "../Assets/book4.png";
import book5 from "../Assets/book5.png";
import book6 from "../Assets/book6.png";
import book7 from "../Assets/book7.png";
import book8 from "../Assets/book8.png";
import book9 from "../Assets/book9.png";
import book00 from "../Assets/book0.png";

const booksdata = [
  {
    id: 0,
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: true,
  },
  {
    id: 1,
    image: book00,
    name: "Being Boss",
    author: "Kathleen Shannon and Emily...",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: false,
  },
  {
    id: 2,
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    finished: false,
    prog: 15,
    added: false,
  },
  {
    id: 3,
    image: book3,
    name: `Doesn't Hurt to Ask`,
    author: "Trey Gowdy",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: true,
  },
  {
    id: 4,
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    finished: false,
    prog: 12,
    added: true,
  },
  {
    id: 5,
    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: true,
  },
  {
    id: 6,
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: true,
  },
  {
    id: 7,
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: false,
    prog: 15,
    added: true,
  },
  {
    id: 8,
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    finished: false,
    prog: 13,
    added: true,
  },
  {
    id: 9,
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    finished: false,
    prog: 12,
    added: true,
  },
];

function RoutingFile() {
  const [books, setBooks] = useState(booksdata);

  return (
    <div >
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App details={books} setBooks={setBooks} />} />
        <Route
          path="/book/:id"
          element={<BookPage details={books} setBooks={setBooks} />}
        />
        <Route
          path="/entrapreneur"
          element={<EntraprenaurPage details={books} setBooks={setBooks} />}
        />
        <Route
          path="/login"
          element={<EntraprenaurPage details={books} setBooks={setBooks} />}
        />
        <Route
          path="/logout"
          element={<EntraprenaurPage details={books} setBooks={setBooks} />}
        />
      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default RoutingFile;
