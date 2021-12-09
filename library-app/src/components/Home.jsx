import { useState } from "react";
import BookList from "./books";
import ModalForm from "./ModalForm";

const Home = () => {
  const [books, setBooks] = useState([
    {
      title: "The Fault in our stars",
      author: "John Green",
      subject:
        "This novel not only explores way in which cancer affects those who are diagnosed but also shows the way in which families and friends react to their diagnoses",
    },
    {
      title: "After Life",
      author: "Kate Atkinson",
      subject:
        "The story of Ursula's lives, as with each new life she makes small changes that send her on a completely different path.",
    },
    {
      title: "Harry Potter",
      author: "J.K.Rowling",
      subject:
        "Its a fictional and where its created by popular novels and its play and a book its script appeared.",
    },
  ]);
  const func = () => {
    setValue(!value);
  };
  const [value, setValue] = useState(false);
  const [edit, setEdit] = useState("");

  const handleDelete = (indexValue) => {
    const newBooks = books.filter((books, index) => index != indexValue);
    setBooks(newBooks);
  };
  const handleEdit = () => {
    setImmediate(!edit);
  };

  return (
    <div className="home">
      <button onClick={func} type="Done">
        New Data
      </button>
      <BookList
        books={books}
        setBooks={setBooks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setEdit={setEdit}
      />
      {value && <ModalForm books={books} setBooks={setBooks} func={func} />}
    </div>
  );
};

export default Home;
