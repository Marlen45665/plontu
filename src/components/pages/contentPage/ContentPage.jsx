import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../../../db.json"
import "../contentPage/ContentPage.css";

function ContentPage() {
  const {user} = db
  const { id, i } = useParams();
  const [state, setState] = useState(user[id-1].post[i - 1]);

  useEffect(() => {
    let intervalId;
    if (state.textPost) {
      let charIndex = 0;
      intervalId = setInterval(() => {
        if (charIndex < state.textPost.length) {
          setState((prevState) => ({
            ...prevState,
            animatedText: state.textPost.slice(0, charIndex + 1)
          }));
          charIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 20); // Интервал задержки между появлением символов (в миллисекундах)
    }
    return () => clearInterval(intervalId);
  }, [state.textPost]);

  return (
    <div className="a">
      <h2 className="title-post" style={{ animationDelay: `${10 * 50}ms` }}>{state.namePost}</h2>
      <div className="post-text">{state.animatedText}</div>
    </div>
  );
}

export default ContentPage;
