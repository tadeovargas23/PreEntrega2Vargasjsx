// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from '../data';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await fetchItemById(parseInt(id));
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={item.image} alt={item.name} className="item-detail-image" />
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    </div>
  );
};

export default ItemDetailContainer;
