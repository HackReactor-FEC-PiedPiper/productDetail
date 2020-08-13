import React from 'react';

const Images = ({ photos }) => (
  <section className="carousel" aria-label="Gallery">
    <ol className="carousel__viewport">
      {photos.map((photo, i) => (
        <li
          id={`carousel__slide${i + 1}`}
          tabIndex="0"
          style={{ backgroundImage: `URL(${photos[i].url})` }}
          className="carousel__slide"
        >
          <div className="carousel_snapper">
            <a
              href={i > 0 ? `#carousel__slide${i}` : `#carousel__slide${i + 1}`}
              className="carousel__prev"
            >
              Go to last slide
            </a>
            <a href={`#carousel__slide${i + 2}`} className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
      ))}
    </ol>

    <aside className="carousel__navigation">
      <ol className="carousel__navigation-list">
        {photos.map((photo, i) => (
          <li className="carousel__navigation-item">
            <a
              style={{ backgroundImage: `URL(${photo.thumbnail_url})` }}
              href={`#carousel__slide${i + 1}`}
              className="carousel__navigation-button"
            >
              {`Go to slide ${i + 1}`}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  </section>
);

export default Images;
