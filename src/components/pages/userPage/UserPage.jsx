import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../header/Header";
import CardPhoto from "../../card/cardPhoto/CardPhoto";
import { Modal } from "../modal/Modal";
import "./UserPage.css";

function UserPage() {
    const [modal, setModal] = useState(false)
    const [state, setState] = useState([]);

    const { id } = useParams();
    const URL = `http://localhost:3001/user/${id}`;

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((res) => setState(res));
    }, [URL]);

    const openModal = () => {
        setModal(modal => !modal)
    }

    const renderContent = () => {
        if (state.type === "post") {
        return state.post.map((item) => (
            <Link
            to={`/user/${id}/content/${item.postId}`}
            key={item.postId}
            style={{ textDecoration: "none" }}
            >
            <CardPhoto name={item.namePost}>
                <div className="Post">{item.textPost}</div>
            </CardPhoto>
            </Link>
        ));
        }

        if (state.type === "photo") {
        return state.photo.map((item) => (
            <div onClick={openModal} key={item.postId} className="card-photo animate">
                <CardPhoto name={item.namePost}>
                    <div className="Photo" style={{backgroundImage: `url(${item.photoPost})`}}></div>
                </CardPhoto>
            </div>
        ));
        }

        return null;
    };

    return (
        <>
        <Header name={state.userName} hashtag={state.hashtag} avatarImg={state.img} />
        <div className="user-card">
            {state[state.type] === undefined ? (
            <CardPhoto >
                <div className="Photo"></div>
            </CardPhoto>
            ) : (
            renderContent()
            )}
        </div>
        {modal === false ? null :
        <Modal setActive={setModal}>
        </Modal>}
        </>
    );
}

export default UserPage;
