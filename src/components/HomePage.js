import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems } from "../actions";

import './Card.css';
import Card from "./Card";

const HomePage = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(fetchItems());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h2 className="title">Social Media App</h2>
        <hr />
        <div className="outer-card">
          {items.map((item) => (
            <Link to={`/item/${item.id}`} className="home">
              <Card data={item}/>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
export default HomePage;
  