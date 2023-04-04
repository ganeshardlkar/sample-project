import React from "react";
import './Card.css';

const Card = (props) => {
    // console.log(props);
    return (
        <div className="card">
            <img src={`https://picsum.photos/200?random=${props.data.id}`} alt="" />
            <p>User ID: {props.data.userId}</p>
            <p>Title: {props.data.title}</p>
            <p>Body: {props.data.body}</p>
        </div>
    )
}

export default Card;