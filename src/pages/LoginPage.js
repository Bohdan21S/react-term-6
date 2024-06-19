import React from 'react';
import * as Components from "../components/LoginPageComponents";
import "../assets/styles/LoginPage.css";
import {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const LoginPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState(location.pathname === '/login');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleBackNavigation = () => {
      const previousPath = sessionStorage.getItem('previousPath');
      if (previousPath) {
            navigate(previousPath, { replace: true });
            window.location.reload();
      } else {
          navigate('/');
      }
  };

  const handleRegister = () => {
    const userData = {id: uuidv4(), name, email, password};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    const user = users.find(user => user.email === email && user.password === password);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    handleBackNavigation();
};

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            handleBackNavigation();
        } else {
            alert('Неправильна електронна пошта або пароль');
        }
    };

    return (
        <div className="login-page">
            <div className="background-blur"></div>
            <div className="form-content">
                <Components.Container>
                    <Components.CloseIcon onClick={handleBackNavigation}>
                        <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </Components.CloseIcon>
                    <Components.SignUpContainer signingIn={signIn}>
                        <Components.Form>
                            <Components.Title>Реєстрація</Components.Title>
                            <Components.Input type="text" placeholder="Ім'я" value={name}
                                              onChange={e => setName(e.target.value)}/>
                            <Components.Input type="email" placeholder="Електронна пошта" value={email}
                                              onChange={e => setEmail(e.target.value)}/>
                            <Components.Input type="password" placeholder="Пароль" value={password}
                                              onChange={e => setPassword(e.target.value)}/>
                            <Components.Button onClick={handleRegister}>Зареєструватись</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>
                    <Components.SignInContainer signingIn={signIn}>
                        <Components.Form>
                            <Components.Title>Вхід</Components.Title>
                            <Components.Input type="email" placeholder="Електронна пошта" value={email}
                                              onChange={e => setEmail(e.target.value)}/>
                            <Components.Input type="password" placeholder="Пароль" value={password}
                                              onChange={e => setPassword(e.target.value)}/>
                            <Components.Anchor href="#">Забули пароль?</Components.Anchor>
                            <Components.Button onClick={handleLogin}>Увійти</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
                    <Components.OverlayContainer signingIn={signIn}>
                        <Components.Overlay signingIn={signIn}>
                            <Components.LeftOverlayPanel signingIn={signIn}>
                                <Components.Title>Маєте акаунт?</Components.Title>
                                <Components.Paragraph>
                                    Якщо у вас вже є обліковий запис, то просто увійдіть.
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => {
                                    setSignIn(true);
                                    navigate('/login');
                                }}>
                                    Вхід
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>
                            <Components.RightOverlayPanel signingIn={signIn}>
                                <Components.Title>Вперше тут?</Components.Title>
                                <Components.Paragraph>
                                    Зареєструйтеся та відкрийте для себе світ нових можливливостей
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => {
                                    setSignIn(false);
                                    navigate('/signup');
                                }}>
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
