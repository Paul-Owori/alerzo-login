import React from 'react';
import UserContainer from '../../components/UserContainer';
import { AlerzoLogo, AddUserIcon, LogoutIcon } from '../../assets/svg';

import styles from './style.module.css';

const testUsers = [
  {
    name: 'User One',
    img: '',
  },
  {
    name: 'User Two',
    img: '',
  },
  {
    name: 'User Three',
    img: '',
  },
  {
    name: 'Paul Three',
    img: '',
  },
];
const Login = () => {
  const onLogin = (user) => {};
  const onLogout = () => {};
  const onAddUser = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <AlerzoLogo />
          <p>Choose an account to continue</p>
        </div>

        <div className={styles.usersContainer}>
          {testUsers.map((user, index) => {
            return (
              <UserContainer
                user={user}
                key={user.name}
                index={index}
                onLogin={() => onLogin(user)}
                onLogout={() => onLogout(user)}
              />
            );
          })}
        </div>

        <div className={styles.iconRow}>
          <div className={styles.icon} onClick={onAddUser}>
            <AddUserIcon size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
