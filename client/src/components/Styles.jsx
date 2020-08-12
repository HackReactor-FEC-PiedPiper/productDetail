import React from "react";

const Styles = ({ selectedStyle, styles, changeStyle }) => (
  <div className="componentContainer">
    <div id="styleName">
      <span>
        <b>STYLE&nbsp;></b>
      </span>
      &nbsp;&nbsp;
      <span>{selectedStyle.name.toUpperCase()}</span>
    </div>
    <div id="selectorButtons">
      <button
        autoFocus //render first btn separately so can add autofocus
        style={{ backgroundImage: `URL(${styles[0].photos[0].thumbnail_url})` }}
        id="btn"
        onClick={() => changeStyle(styles[0].style_id)}
        key={styles[0].style_id}
      >
        {selectedStyle.style_id === styles[0].style_id ? (
          <div className="overlay">
            <i className="fas fa-check-circle"></i>
          </div>
        ) : null}
      </button>
      {styles.map((style, i) => {
        if (i > 0) {
          return (
            <div key={style.style_id} id={i}>
              <button
                style={{
                  backgroundImage: `URL(${style.photos[0].thumbnail_url})`,
                }}
                onClick={() => changeStyle(style.style_id)}
                key={style.style_id}
              >
                {selectedStyle.style_id === style.style_id ? (
                  <div className="overlay">
                    <i className="fas fa-check-circle"></i>
                  </div>
                ) : null}
              </button>
              <div className="break"></div>
            </div>
          );
        }
      })}
    </div>
  </div>
);

export default Styles;
