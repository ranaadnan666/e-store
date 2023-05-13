import Address from "../component/account/Address";
import ChangePass from "../component/account/Password";
import Profile from "../component/account/Profile";
import Cart from "../pages/cart/Cart";
import ProductDetail from "../pages/detail/ProductDetail";
import Home from "../pages/home/Home";
import MainAccount from "../pages/myaccount/MainAccount";
import ManageAccount from "../pages/myaccount/ManageAccount";
import MyWishList from "../pages/myaccount/MyWishList";
import PaymentOption from "../pages/myaccount/PaymentOption";
import Reviews from "../pages/myaccount/Reviews";
import VerifyWallet from "../pages/myaccount/VerifyWallet";
import Vochar from "../pages/myaccount/Vochar";
import Wallet from "../pages/myaccount/Wallet";
import Cancel from "../pages/myaccount/order/Cancel";
import TabsOrder from "../pages/myaccount/order/Order";
import Return from "../pages/myaccount/order/Return";
import Product from "../pages/products/Product";
import SignIn from "../pages/register/SignIn";
import SignUp from "../pages/register/SignUp";
import Store from "../pages/store/Store";
import HelpCenter from "../pages/helpcenter/MainPage";
import Order from "../pages/placeorder/Order";

// ================rout data===================  //

export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
 path:"/order",
 element:<Order/>
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/store",
    element: <Store />,
  },

  {
    path: "/detail",
    element: <ProductDetail />,
  },
  {
    path: "/helpcenter",
    element: <HelpCenter />,
  },
  {
    path: "/account/",
    element: <MainAccount />,
    children: [
      {
        path: "/account/manage",
        element: <ManageAccount />,
      },
      {
        path: "/account/paymentoption",
        element: <PaymentOption />,
      },
      {
        path: "/account/wallet",
        element: <Wallet />,
      },
      {
        path: "/account/walletverification",
        element: <VerifyWallet />,
      },
      {
        path: "/account/profile",
        element: <Profile />,
      },
      {
        path: "/account/password",
        element: <ChangePass />,
      },
      {
        path: "/account/address",
        element: <Address />,
      },
      {
        path: "/account/order",
        element: <TabsOrder />,
      },
      {
        path: "/account/return",
        element: <Return />,
      },
      {
        path: "/account/cancel",
        element: <Cancel />,
      },
      {
        path: "/account/vochar",
        element: <Vochar />,
      },
      {
        path: "/account/reviews",
        element: <Reviews />,
      },
      {
        path: "/account/mywishlist",
        element: <MyWishList />,
      },
    ],
  },
];
