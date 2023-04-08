import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Utilities
// import { loginUser, logoutUser } from "../../redux/user/actions";
import { login, logout } from "../../store/user/slice";
import { selectProductsCount } from "../../store/cart/cart-selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);

  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(login({ username: "Sarah", password: 123 }));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full bg-zinc-900 flex justify-between text-slate-200 p-5 shadow-lg shadow-zinc-400">
      <div className="text-xl font-bold">Redux Shopping</div>
      <div className="flex items-center">
        { currentUser ? <div className="font-medium hover:cursor-pointer mr-10" onClick={handleLogoutClick}>Sair</div> : <div className="font-medium hover:cursor-pointer mr-10" onClick={handleLoginClick}>Login</div> }
        <div className="font-medium" onClick={handleCartClick}>Carrinho ({ productsCount })</div>
      </div>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </div>
  );
}

export default Header;
