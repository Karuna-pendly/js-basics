import { useState } from "react";
import BookList from "./books";
import ModalForm from "./ModalForm";

const Home = () => {
  const [books, setBooks] = useState([
    {
      title: "Coming Soon",
      author: "karuna",
      subject: "You can Start Your Journey",
    },
    {
      title: "After Life",
      author: "Daya",
      subject: "You can enjoy the series",
    },
    {
      title: "New Arrival",
      author: "John",
      subject: "This is the horror and Funny story",
    },
  ]);
  const func = () => {
    setValue(!value);
  };
  const [value, setValue] = useState(false);
  const handleDelete = (indexValue) => {
    const newBooks = books.filter((books, index) => index != indexValue);
    setBooks(newBooks);
  };

  return (
    <div className="home">
      <button onClick={func} type="Done">
        New Data
      </button>
      <BookList books={books} setBooks={setBooks} handleDelete={handleDelete} />
      {value && <ModalForm books={books} setBooks={setBooks} func={func} />}
    </div>
  );
};

export default Home;
