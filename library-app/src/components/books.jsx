const BookList = ({ books, handleDelete }) => {
  // const books = data.books;
  //   const title = props.title;
  console.log(books);

  return (
    <div className="book-list">
      {/* <h2>{title}</h2> */}
      {books &&
        books.map((book, index) => (
          <div className="book" key={index}>
            <h2>{book.title}</h2>
            <p>Written by{book.author}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
};
export default BookList;
