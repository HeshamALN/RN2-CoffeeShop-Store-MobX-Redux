import { createStackNavigator } from "react-navigation-stack";

//COMPONENTS !!
import Login from "../Components/Login/index";

import CoffeeList from "../Components/CoffeeList/index";
import CoffeeDetail from "../Components/CoffeeDetail/index";
import CoffeeCart from "../Components/CoffeeCart/index";

const StackNav = createStackNavigator(
  {
    LoginScreen: Login,

    CoffeeListScreen: CoffeeList,
    CoffeeDetaSilScreen: CoffeeDetail,
    CoffeeCartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "blue",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
