import "./style.css";
import ProfileImg from "./profile.png";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

const Comment = (props) => {
  const { name, email, message, date, onDeleteComment } = props;

  return (
    <div className="comment">
      <img src={ProfileImg} alt="User avatar" />

      <div className="content">
        <h2 className="name">{name}</h2>
        <p className="email">{email}</p>
        <p className="message">{message}</p>
        <p className="date">
          {formatRelative(date, new Date(), { locale: ptBR })}
        </p>
        <button className="delete" onClick={onDeleteComment}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Comment;
