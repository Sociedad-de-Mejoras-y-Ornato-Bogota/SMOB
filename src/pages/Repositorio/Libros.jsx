import './Libros.css';
import React, { useState } from 'react';


const LazyLibros = React.lazy(() => import('./LazyLibros'));

const Libros = () => {
  return (
    <div className="publicaciones-container">
    

       <React.Suspense fallback={<div>Loading...</div>}>
          <LazyLibros  />
        </React.Suspense>
    </div>
  );
};

export default Libros;
