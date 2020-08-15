import React, { useState } from 'react';

const ImagesModal = ({
  handleClose,
  show,
  photos,
  leftArrowClick,
  rightArrowClick,
  selectedSlide,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [expSelectedSlide, setExpSelectedSlide] = useState(selectedSlide);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <aside className="exp-carousel__navigation">
          <div id="exp-thumbnailNavigation">
            <ol className="exp-carousel__navigation-list">
              {photos.map((photo, i) => (
                <li key={i} className="exp-carousel__navigation-item">
                  <a
                    onClick={() => setExpSelectedSlide(i + 1)}
                    style={{ backgroundImage: `URL(${photo.thumbnail_url})` }}
                    href={`#exp-carousel__slide${i + 1}`}
                    className={
                      i + 1 === expSelectedSlide
                        ? 'exp-carousel__navigation-button-selected'
                        : 'exp-carousel__navigation-button'
                    }
                  >
                    {`Go to slide ${i + 1}`}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <section className="exp-carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            {photos.map((photo, i) => (
              <li
                onClick={() => console.log('clicked image')}
                key={i}
                id={`exp-carousel__slide${i + 1}`}
                tabIndex="0"
                style={{ backgroundImage: `URL(${photos[i].url})` }}
                className="exp-carousel__slide"
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
              </li>
            ))}
          </ol>
        </section>
        <button id="closeModal" onClick={handleClose}>
          Close Expanded View
        </button>
      </section>
    </div>
  );
};

export default ImagesModal;

{
  /* <button
onClick={() => scrollClick('left')}
id="prevThumbnails"
className="scrollThumbnails"
>
<i className="fas fa-arrow-left" />
</button>
<button
onClick={() => scrollClick('right')}
id="nextThumbnails"
className="scrollThumbnails"
>
<i className="fas fa-arrow-right" />
</button> */
}
