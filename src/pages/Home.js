import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Home() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { products, filters, tags } = state;
  return (
    <div>
      <div>filters</div>
      <div>tags</div>
      <div>products</div>
    </div>
  );
}
export default Home;
