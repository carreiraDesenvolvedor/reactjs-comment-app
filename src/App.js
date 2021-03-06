import React from "react";
import "./App.css";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Swal from "sweetalert2";
class App extends React.Component {
    state = {
        comments: [{
                name: "Jonathan Melo",
                email: "desenvolvedor.jonathan@gmail.com",
                date: new Date(2000, 12, 10),
                message: "O Jonathan é muito lindão.",
            },
            {
                name: "Jackeline Gois",
                email: "j@gmail.com",
                date: new Date(),
                message: "Realmente o jonathan é muito lindão.",
            },
        ],
        form: {
            name: "",
            email: "",
            message: "",
        },
    };

    addComment = (event) => {
        event.preventDefault();

        const newComment = {...this.state.form, date: new Date() };

        this.setState({
            comments: [...this.state.comments, newComment],
            form: {
                name: "",
                email: "",
                message: "",
            },
        });

        Swal.fire("O comentário foi adicionado com sucesso!", "", "success");
    };

    onFieldChanged = (event) => {
        const newCommentForm = this.state.form;
        newCommentForm[event.target.name] = event.target.value;

        this.setState({
            form: newCommentForm,
        });
    };

    deleteCommentAlert = (comment) => {
        Swal.fire({
            title: "Você realmente quer excluir esse comentário?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Sim, eu tenho certeza.",
            denyButtonText: `Não, eu mudei de ideia.`,
            icon: "question",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.deleteComment(comment);
                Swal.fire("O comentário foi excluído com sucesso!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Fique tranquilo, nada foi excluído.", "", "info");
            }
        });
    };

    deleteComment = (comment) => {
        const filteredList = this.state.comments.filter((commentFilter) => {
            return comment !== commentFilter;
        });

        this.setState({
            comments: filteredList,
        });
    };

    render() {
        return ( <
            div className = "App" >
            <
            h1 > My Comments App! < /h1>{" "} {
                this.state.comments.map((comment, index) => {
                    return ( <
                        Comment key = { index }
                        name = { comment.name }
                        email = { comment.email }
                        date = { comment.date }
                        message = { comment.message }
                        onDeleteComment = {
                            () => {
                                this.deleteCommentAlert(comment);
                            }
                        }
                        />
                    );
                })
            } { " " } <
            CommentForm onAddComment = { this.addComment }
            onFieldChanged = { this.onFieldChanged }
            form = { this.state.form }
            />{" "} <
            /div>
        );
    }
}

export default App;