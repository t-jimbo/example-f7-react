import { useState } from "react";
import {
  BlockFooter,
  f7,
  List,
  ListButton,
  ListInput,
  LoginScreen as LoginScreenBase,
  LoginScreenTitle,
  Page,
  View,
} from "framework7-react";

// TODO: React.FC型が使えない
export const LoginScreen = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const alertLoginData = () => {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      },
    );
  };

  return (
    <LoginScreenBase id="my-login-screen">
      <View>
        <Page loginScreen>
          <LoginScreenTitle>Login</LoginScreenTitle>
          <List form>
            <ListInput
              type="text"
              name="username"
              placeholder="Your username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            ></ListInput>
            <ListInput
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            ></ListInput>
          </List>
          <List>
            <ListButton title="Sign In" onClick={() => alertLoginData()} />
            <BlockFooter>
              Some text about login information.
              <br />
              Click "Sign In" to close Login Screen
            </BlockFooter>
          </List>
        </Page>
      </View>
    </LoginScreenBase>
  );
};
