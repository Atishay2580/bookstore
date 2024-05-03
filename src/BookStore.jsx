import Book from "./Book";

const BookStore = () => {
  const books = [
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      imgLink:
        "https://m.media-amazon.com/images/I/61pZyTuNDYL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Robin Sharma",
    },
    {
      title: "You Only Live Once",
      imgLink:
        "https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY327_FMwebp_QL65_.jpg",
      author: "Stuti Changle",
    },
    {
      title: "The Power of Subconcious Mind",
      imgLink:
        "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY327_FMwebp_QL65_.jpg",
      author: "Joseph Murphy",
    },
    {
      title: "The Power Of Positive Attitude: Your Road To Success",
      imgLink:
        "https://m.media-amazon.com/images/I/610kcuW0g1L._AC_UL480_FMwebp_QL65_.jpg",
      author: "Roger Fritz",
    },
    {
      title: "Atomic Habits",
      imgLink:
        "https://m.media-amazon.com/images/I/81IL8Dy4vmL._AC_UY327_QL65_.jpg",
      author: "James Clear",
    },
  ];

  return (
    <div className="booklist">
      {books.map((b,index) => (
        <Book {...b} key={index} />
      ))}

      {/* {books.map((b,index) => {
        return <Book {...b} key={index} />;
      })} */}
    </div>
  );
};
export default BookStore;
