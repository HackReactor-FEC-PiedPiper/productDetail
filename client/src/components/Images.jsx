import React, { useState } from 'react';
import ImagesModal from './ImagesModal';

const Images = ({ photos, thumbnailScrollRef, scrollClick }) => {
  const [selectedSlide, setSelectedSlide] = useState(1);
  const [show, setShow] = useState(false);

  const leftArrowClick = () => {
    scrollClick('left');
    setSelectedSlide(selectedSlide - 1);
  };

  const rightArrowClick = () => {
    scrollClick('right');
    setSelectedSlide(selectedSlide + 1);
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {photos.map((photo, i) => (
            <li
              onClick={() => console.log('clicked image')}
              key={i}
              id={`carousel__slide${i + 1}`}
              tabIndex="0"
              style={{ backgroundImage: `URL(${photos[i].url})` }}
              className="carousel__slide"
            >
              {selectedSlide > 1 ? (
                <div className="carousel_snapper">
                  <a
                    onClick={leftArrowClick}
                    href={
                      i > 0
                        ? `#carousel__slide${i}`
                        : `#carousel__slide${i + 1}`
                    }
                    className="carousel__prev"
                  >
                    Go to last slide
                  </a>
                </div>
              ) : null}
              {selectedSlide < photos.length ? (
                <div className="carousel_snapper">
                  <a
                    onClick={rightArrowClick}
                    href={`#carousel__slide${i + 2}`}
                    className="carousel__next"
                  >
                    Go to next slide
                  </a>
                </div>
              ) : null}
              {' '}
              <button id="expand" onClick={showModal} />
            </li>
          ))}
        </ol>
        <button
          onClick={() => scrollClick('left')}
          id="prevThumbnails"
          className="scrollThumbnails"
        >
          <i className="fas fa-arrow-left" />
        </button>
        <aside ref={thumbnailScrollRef} className="carousel__navigation">
          <div id="thumbnailNavigation">
            <ol className="carousel__navigation-list">
              {photos.map((photo, i) => (
                <li key={i} className="carousel__navigation-item">
                  <a
                    onClick={() => setSelectedSlide(i + 1)}
                    style={{ backgroundImage: `URL(${photo.thumbnail_url})` }}
                    href={`#carousel__slide${i + 1}`}
                    className={
                      i + 1 === selectedSlide
                        ? 'carousel__navigation-button-selected'
                        : 'carousel__navigation-button'
                    }
                  >
                    {`Go to slide ${i + 1}`}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <button
          onClick={() => scrollClick('right')}
          id="nextThumbnails"
          className="scrollThumbnails"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </section>
      <ImagesModal
        show={show}
        handleClose={hideModal.bind(this)}
        photos={photos}
        leftArrowClick={leftArrowClick}
        rightArrowClick={rightArrowClick}
        selectedSlide={selectedSlide}
      />
    </div>
  );
};

export default Images;
