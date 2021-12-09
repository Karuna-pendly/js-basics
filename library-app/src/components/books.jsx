import { Col, Card, CardBody, CardTitle, Row } from "reactstrap";

const BookList = ({ books, handleDelete, handleEdit }) => {
  // const books = data.books;
  // const title = props.title;
  console.log(books);

  return (
    <Col md="3">
      <Card>
        <div className="container">
          {books &&
            books.map((book, index) => (
              <div className="row" key={index}>
                <CardBody>
                  <CardTitle>
                    <Row className="no-gutters">
                      <h2>{book.title}</h2>
                      <p>Written by{book.author}</p>
                      <p>{book.subject}</p>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    </Row>
                  </CardTitle>
                </CardBody>
              </div>
            ))}
        </div>
      </Card>
    </Col>
  );
};
export default BookList;
