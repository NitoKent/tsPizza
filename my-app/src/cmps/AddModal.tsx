import { useState } from "react";
import { IProducts, Isupplemets } from "../models";
import { useDispatch } from "react-redux";
import { add } from "../store";
import 'animate.css'

interface AddModalProps {
  onClose: () => void;
  products: IProducts;
  supplements: Isupplemets[];
}

export function AddModal({ onClose, products, supplements }: AddModalProps) {
  const [size, setSize] = useState(2); 
  const dispatch = useDispatch();
  
  const handleAddToBasket = () => {
    dispatch(add());
    onClose();
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(event.target.value));
  };



  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate__animated animate__fadeIn" onClick={(e) => e.stopPropagation()}>
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
            
            <div className="add-to-pizza">
              {supplements.map((supplement) => (
                <div className="supplement" key={supplement.id}>
                  <img src={supplement.image} alt={supplement.title} />
                  <p>{supplement.title}</p>
                  <p>{supplement.price}$</p>
                </div>
              ))}
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
