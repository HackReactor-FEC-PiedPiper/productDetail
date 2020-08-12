import React, { useState } from 'react';

const AddToCart = ({
  SKUs,
  selectedSKU,
  changeSKU,
  selectedStyle,
  changeQTY,
  selectedQTY,
  onAddToCartClick,
  skuSelectRef,
  showSelectInstruction,
}) => {
  const availableSizes = Object.keys(selectedStyle.skus).filter(
    (sku) => Number(SKUs[sku]) > 0,
  );

  let outOfStock = true;
  for (const sku in SKUs) {
    if (Number(SKUs[sku]) > 0) {
      outOfStock = false;
      break;
    }
    if (sku === 'null') {
      outOfStock = false;
    }
  }
  const availableQty = SKUs[selectedSKU] > 15 ? 15 : SKUs[selectedSKU];
  const qtyArray = [];
  for (let i = 0; i < availableQty; i++) {
    qtyArray.push(i + 1);
  }

  const [state, setState] = useState(true);

  return (
    <div className="componentContainer">
      {showSelectInstruction ? (
        <div className="select-instruction">Please Select Size</div>
      ) : null}
      <div className="a2cforms">
        <form>
          <label htmlFor="size" />
          <select
            ref={skuSelectRef}
            onFocus={(e) => {
              e.target.size = '6';
            }}
            onBlur={(e) => {
              e.target.size = '0';
            }}
            id="size"
            value={selectedSKU}
            onChange={() => changeSKU(size.options[size.selectedIndex].value)}
          >
            <option value="default">
              {outOfStock ? 'OUT OF STOCK' : 'SELECT SIZE'}
            </option>
            {availableSizes.map((size, i) => (
              <option key={i} value={size}>
                {size}
              </option>
            ))}
          </select>
        </form>
        <form>
          <label htmlFor="qty" />
          <select
            id="qty"
            onFocus={(e) => {
              e.target.size = '6';
            }}
            onBlur={(e) => {
              e.target.size = '0';
            }}
            value={selectedQTY}
            onChange={() => changeQTY(qty.options[qty.selectedIndex].value)}
          >
            <option value="-">-</option>
            {qtyArray.map((qty, i) => (
              <option key={i} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </form>
      </div>
      {!outOfStock ? (
        <div className="a2cbtn">
          <button onClick={onAddToCartClick} id="a2cbtn">
            <span>ADD TO CART</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AddToCart;
