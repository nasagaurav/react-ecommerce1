import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

import Card from '../components/Card';
function Home() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { products, filters, tags } = state;
  return (
    <Container>
      <div>
        <br />
        <ButtonGroup aria-label="Basic example">
          {filters.map((item, index) => (
            <Button variant="secondary" key={index}>
              {item}
            </Button>
          ))}
          {tags.map((item) => (
            <Button variant="primary" key={item.t}>
              {item.t} - {item.c}
            </Button>
          ))}
        </ButtonGroup>
        <div style={{ display: 'flex', flexFlow: 'wrap', gap: '20px' }}>
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
export default Home;
