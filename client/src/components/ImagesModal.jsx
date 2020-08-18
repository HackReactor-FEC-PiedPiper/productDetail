import React, { useState, useEffect } from 'react';

const ImagesModal = ({
  handleClose,
  show,
  photos,
  selectedSlide,
  expThumbnailScrollRef,
  scrollClick,
  selectedPhoto,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [expSelectedSlide, setExpSelectedSlide] = useState(selectedSlide);

  const leftArrowClick = () => {
    scrollClick('top');
    setExpSelectedSlide(expSelectedSlide - 1);
  };

  const rightArrowClick = () => {
    scrollClick('bottom');
    setExpSelectedSlide(expSelectedSlide + 1);
  };

  useEffect(() => {
    setExpSelectedSlide(selectedSlide);
  }, []);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <aside ref={expThumbnailScrollRef} className="exp-carousel__navigation">
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
            <li
              id={`exp-carousel__slide${0}`}
              tabIndex="0"
              style={{ backgroundImage: `URL(${selectedPhoto.url})` }}
              className="exp-carousel__slide"
            >
              <div className="carousel_snapper">
                <a
                  onClick={rightArrowClick}
                  href={`#exp-carousel__slide${1}`}
                  className="carousel__next"
                >
                  Go to next slide
                </a>
              </div>
            </li>
            {photos.map((photo, i) => (
              <li
                onClick={() => console.log('clicked image')}
                key={i}
                id={`exp-carousel__slide${i + 1}`}
                tabIndex="0"
                style={{ backgroundImage: `URL(${photos[i].url})` }}
                className="exp-carousel__slide"
              >
                {expSelectedSlide > 1 ? (
                  <div className="carousel_snapper">
                    <a
                      onClick={leftArrowClick}
                      href={
                        i > 0
                          ? `#exp-carousel__slide${i}`
                          : `#exp-carousel__slide${i + 1}`
                      }
                      className="carousel__prev"
                    >
                      Go to last slide
                    </a>
                  </div>
                ) : null}
                {expSelectedSlide < photos.length ? (
                  <div className="carousel_snapper">
                    <a
                      onClick={rightArrowClick}
                      href={`#exp-carousel__slide${i + 2}`}
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
