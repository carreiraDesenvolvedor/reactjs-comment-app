import "./Comment.css";

const Comment = (props) => {
  const { name, email, message, date } = props;

  return (
    <div className="comment">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{message}</p>
      <p>{date.toString()}</p>
    </div>
  );
};

export default Comment;
