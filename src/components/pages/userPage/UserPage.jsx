import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../header/Header";
import CardPhoto from "../../card/cardPhoto/CardPhoto";
import { Modal } from "../modal/Modal";
import db from "../../../db.json"
import "./UserPage.css";

function UserPage() {
    const {user} = db
    const { id } = useParams();
    const DATA = user[id-1]
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(modal => !modal)
    }

    const renderContent = () => {
        if (DATA.type === "post") {
        return DATA.post.map((item) => (
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

        if (DATA.type === "photo") {
        return DATA.photo.map((item) => (
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
            <Header name={DATA.userName} hashtag={DATA.hashtag} avatarImg={DATA.img} />
            <div className="user-card">
                {DATA[DATA.type] === undefined ? (
                <CardPhoto >
                    <div className="Photo"></div>
                </CardPhoto>
                ) : (
                renderContent()
                )}
            </div>
            {modal === false ? null : <Modal setActive={setModal}/>}
        </>
    );
}

export default UserPage;
