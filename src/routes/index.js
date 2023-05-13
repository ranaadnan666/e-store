import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routesData";
import ScrollToTop from "./Use";
import Header from "../component/navbar/Header";
import Footer from "../component/footer/Footer";
import Chat from "../component/chat/Chat";
import SwipeableEdgeDrawer from "../component/chat/Bottombar";
const Routing = () => {
  return (
    <div>
      {/* ================routing===================  */}
      <ScrollToTop>
        {/* header */}
        <Header />
        
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children?.map((child, index) => (
                <Route key={index} path={child.path} element={child.element} />
              ))}
            </Route>
          ))}
        </Routes>
        {/* footer */}
        <Footer />
        
        <Chat/>
      </ScrollToTop>
    </div>
  );
};

export default Routing;
