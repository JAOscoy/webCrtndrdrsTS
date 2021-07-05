import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/header/index"
import ButtonAppBar from "../components/navbar/index"
import Footer from "../components/footer/index";
//import Header from "../components/Header";
import routes from "./config";
//import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <ButtonAppBar />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
