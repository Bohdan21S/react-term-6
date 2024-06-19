import React from 'react';
import * as Components from "../components/LoginPageComponents";
import "../assets/styles/LoginPage.css";
import { useState } from 'react';

const LoginPage = (props) => {
  
  const [ signIn, setSignIn ] = useState(props.action === 'login');


  return (
    <div className="login-page">
      <div className="background-blur"></div>
      <div className="form-content">
        <Components.Container>
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form>
              <Components.Title>Реєстрація</Components.Title>
              <Components.Input type="text" placeholder="Ім'я" />
              <Components.Input type="email" placeholder="Електронна пошта" />
              <Components.Input type="password" placeholder="Пароль" />
              <Components.Button>Зареєструватись</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>
          <Components.SignInContainer signingIn={signIn}>
            <Components.Form>
              <Components.Title>Вхід</Components.Title>
              <Components.Input type="email" placeholder="Електронна пошта" />
              <Components.Input type="password" placeholder="Пароль" />
              <Components.Anchor href="#">Забули пароль?</Components.Anchor>
              <Components.Button>Увійти</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Маєте акаунт?</Components.Title>
                <Components.Paragraph>
                  Якщо у вас вже є обліковий запис, то просто увійдіть.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>
                  Вхід
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Вперше тут?</Components.Title>
                <Components.Paragraph>
                  Зареєструйтеся та відкрийте для себе світ нових можливливостей
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(false)}>
                  Реєстрація
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </div>
  );
};

export default LoginPage;
