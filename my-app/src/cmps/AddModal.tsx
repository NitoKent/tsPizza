interface AddModalProps {
    onClose: () => void;
  }
  
  export function AddModal({ onClose }: AddModalProps) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div>
            <img src="" alt="" />
          </div>
          <div className="filter-by-size">
            {/* Ваши элементы фильтра */}
          </div>
          <div className="add-ingredients">
            {/* Ваши элементы добавления ингредиентов */}
          </div>
          <div className="add-to-basket">
            <button>
              TO BASKET
            </button>
          </div>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }