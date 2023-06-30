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
    const [clickId, setClickID] = useState()


    const openModal = (id) => {
        setModal(modal => !modal)
        setClickID(() => id-1)
        
    }
    const closeModal = () => {
        setModal(modal => !modal)
        
    }

    const renderContent = () => {
        if (DATA.type === "post") {
            return(
                <div className="grid">
                    {DATA.post.map((item) => (
                        <Link to={`/user/${id}/content/${item.postId}`} key={item.postId} style={{ textDecoration: "none" }}>
                        <CardPhoto name={item.namePost} class={"post-bottom"}>
                            <div className="Post">{item.textPost}</div>
                        </CardPhoto>
                        </Link>
                    ))}
                </div>
            )
        }

        if (DATA.type === "photo") {
            return (
                <div className="grid-photo">
                    {DATA.photo.map((item) => (
                        <div onClick={() => openModal(item.postId)} key={item.postId} className="card-photo animate">
                            <CardPhoto name={item.namePost}>
                                <div className="Photo" style={{backgroundImage: `url(${item.photoPost})`}}>
                                    <div className="opacity"></div>
                                </div>
                            </CardPhoto>
                        </div>
                    ))}
                </div>
            )   
        }

        return null;
    };

    return (
        <>
            <Header name={DATA.userName} hashtag={DATA.hashtag} avatarImg={DATA.img} />
            <div className={`user-card `}>
                {DATA[DATA.type] === undefined ? (
                <CardPhoto >
                    <div className="Photo"></div>
                </CardPhoto>
                ) : (
                renderContent()
                )}
            </div>
            {modal === false ? null : 
            <Modal setActive={setModal}>
                <div className="close-modal" onClick={() => closeModal()}/>
                <div className="modal-img" style={{backgroundImage: `url(${DATA.photo[clickId].photoPost})`}}></div>
                <div className="modal-info">
                    <p className="header-hashtag">#{DATA.hashtag}</p>
                    <p>{DATA.userName}</p>
                </div>
                <h3>{DATA.photo[clickId].namePost}</h3>
            </Modal>}
        </>
    );
}

export default UserPage;
