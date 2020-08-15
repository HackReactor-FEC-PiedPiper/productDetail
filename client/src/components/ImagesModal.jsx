import React from 'react';

const ImagesModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <p>Modal</p>
          <p>Data</p>
        </div>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default ImagesModal;
