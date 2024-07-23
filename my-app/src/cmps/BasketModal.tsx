import 'animate.css'

interface AddModalProps {
  onClose: () => void;
}

// Компонент модального окна корзины
export function BasketModal({ onClose }: AddModalProps) {
  return (
    // Задний фон модального окна
    <div className="basket-modal-backdrop" onClick={onClose}>
      {/* Секция самого модального окна */}
      <section className="basket-modal animate__animated animate__slideInRight" onClick={(e) => e.stopPropagation()}>
        <header>
          <p>Ваши заказы</p>
          <p>Общая сумма заказа:</p>
        </header>
        <div className="content-basket">
          <div className="render-order">
            <ul>
              <li></li>
            </ul>
          </div>
          <button>Заказать</button>
          <div className="order-info"></div>
        </div>
      </section>
    </div>
  );
}

