import "./Libros.css";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LazyLibros = React.lazy(() => import("./LazyLibros"));

const Libros = () => {
  return (
    <div className="publicaciones-container">
      <React.Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RotatingLines
              strokeColor="#762f0b"
              strokeWidth="5"
              animationDuration="0.75"
              width="200"
              visible={true}
            />
          </div>
        }
      >
        <LazyLibros />
      </React.Suspense>
    </div>
  );
};

export default Libros;
