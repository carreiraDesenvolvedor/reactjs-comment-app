import "./Comment.css";

const Comment = (props) => {
  const { name, email, message, date, onDeleteComment } = props;

  return (
    <div className="comment">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{message}</p>
      <p>{date.toString()}</p>
      <button onClick={onDeleteComment}>&times;</button>
    </div>
  );
};

export default Comment;
