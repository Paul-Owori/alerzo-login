import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import UserImage from '../UserImage';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { LogoutIcon } from '../../assets/svg';

const colors = ['#1A50A2', '#00954B', '#FEB207', '#0D8CE9'];

const UserContainer = ({ user, index, onLogin, onLogout }) => {
  const color =
    index === 1
      ? colors[1]
      : index === 0
      ? colors[0]
      : index % 3 === 0
      ? colors[2]
      : index % 4 === 0
      ? colors[3]
      : index % 2 === 0
      ? colors[2]
      : colors[0];
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserImage
          image={user.img}
          name={user.name}
          index={index}
          color={color}
        />
        <p>{user.name}</p>
      </div>
      <div className={styles.iconRow}>
        <div className={styles.icon} onClick={onLogout}>
          <LogoutIcon size={25} color="#757575" />
        </div>

        <div
          className={styles.icon}
          style={{ marginLeft: '20px' }}
          onClick={onLogin}
        >
          <ChevronRightIcon boxSize={26} color="#757575" />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
