import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
function Home() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { products, filters, tags } = state;
  return (
    <div>
      <div>
        <h1>filters</h1>
        {filters.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
      <div>
        <h1>all tags </h1>
        {tags.map((item) => (
          <button key={item.t}>
            {item.t} - {item.c}
          </button>
        ))}
      </div>
      <div>
        <h1>all products</h1>
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export default Home;
