import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems } from "../actions";
import './ItemDetail.css';
import './Card.css';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const item = items.find((item) => item.id === Number(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h2 className="title">Social Media App</h2>
      <hr />
      <div className="item">
        <h2>Details Page For Post With ID {item.id}</h2>
        <img src={`https://picsum.photos/200?random=${item.id}`} alt="" />
        <p>User ID: {item.userId}</p>
        <p>Title: {item.title}</p>
        <p>Body: {item.body}</p>
      </div>
    </>
  );
};

export default ItemDetail;
