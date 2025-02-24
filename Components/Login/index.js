import React, { Component } from "react";
import {navigation} from "react-native-re";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";
import CoffeeList from "../CoffeeList";

class Login extends Component {
  render() {
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input autoCorrect={false} autoCapitalize="none" />
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            onPress={() => this.props.navigation.navigate("CoffeeListScreen")}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            warning
            onPress={() => this.props.navigation.navigate("CoffeeListScreen")}
          >
            <Text>Register</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
  
  
  
  Login.navigationOptions = {
    
      title: "letitle"
    };
  };
  


export default Login;
