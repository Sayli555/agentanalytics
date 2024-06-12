import "./cart.css";

const CartS = ({ cartpr }) => {
  return (
    <>
      <div className="cart-products-main-div">
        <div className="cart-product-img">
          <img src={cartpr.imageurl} width="100%" height="100%" />
        </div>
        <div className="cart-product-info">
          <h2>
            {cartpr.brand} {cartpr.typeofproduct}
          </h2>
          <p>{cartpr.Name}</p>
          <h3>Rs {cartpr.price}/-</h3>

          <div className="total-Qauntity-price-div">
            <h4>quantity ({cartpr.quantity})</h4>
            <h4>
              Total Price {" Rs "}
              {cartpr.quantity * cartpr.price}/-
            </h4>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default CartS;
