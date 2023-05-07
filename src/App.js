import React from 'react';
import Product from './components/Product';
import { animes } from './data';

function App() {
  return (
    <section className='main'>
      {animes.map((anime) => {
        return (
          <Product
            key={anime.id}
            name={anime.name}
            image={anime.image}
            description={anime.description.substring(0, 100)}
            price={anime.price}
          />
        );
      })}
    </section>
  );
}

export default App;
