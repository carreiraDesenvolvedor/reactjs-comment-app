import "./style.css";
const CommentForm = (props) => {
  const { onAddComment, onFieldChanged, form } = props;

  return (
    <form className="comment-form" onSubmit={onAddComment}>
      <h2> Add a comment </h2>
      <div>
        <input
          onChange={onFieldChanged}
          value={form.name}
          type="text"
          name="name"
          placeholder="Type here your name"
          required="required"
        />
      </div>
      <div>
        <input
          onChange={onFieldChanged}
          value={form.email}
          type="email"
          name="email"
          placeholder="Type  here your email"
          required="required"
        />
      </div>
      <div>
        <textarea
          onChange={onFieldChanged}
          name="message"
          rows="4"
          placeholder="Type here your message"
          value={form.message}
          required="required"
        />
      </div>
      <button type="submit"> Add a comment </button>
    </form>
  );
};

export default CommentForm;
