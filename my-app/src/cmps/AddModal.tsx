import { useState } from "react";
import { IProducts } from "../models";
import { useDispatch } from "react-redux";
import { add } from "../store";

interface AddModalProps {
  onClose: () => void;
  products: IProducts;
}

export function AddModal({ onClose, products }: AddModalProps) {
  const [size, setSize] = useState(2); 
  const dispatch = useDispatch();
  
  const handleAddToBasket = () => {
    dispatch(add());
    onClose();
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(event.target.value));
  };

  const getSizeLabel = () => {
    switch (size) {
      case 1:
        return "Маленькая";
      case 2:
        return "Средняя";
      case 3:
        return "Большая";
      default:
        return "Средняя";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          Close X
        </button>
        <div className="left-side">
          <img alt={products.title} src={products.image} />
        </div>
        <div className="right-side">
          <div className="container">
            <h1>{products.title}</h1>
            <p className="add-ingredients">{products.description}</p>

            <div className="size-labels">
              <div className="slider-container">
                <input
                  id="size-slider"
                  type="range"
                  min="1"
                  max="3"
                  value={size}
                  onChange={handleSliderChange}
                  className="slider"
                />
                <div className="labels">
                  <span>Маленькая</span>
                  <span>Средняя</span>
                  <span>Большая</span>
                </div>
                
              </div>
              
            </div>
            <div className="add-to-basket">
              <button onClick={handleAddToBasket}>TO BASKET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
