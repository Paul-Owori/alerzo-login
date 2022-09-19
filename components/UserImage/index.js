import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const UserImage = ({ image, name, color }) => {
  return image ? (
    <img src={image} className={styles.userImg} />
  ) : (
    <div className={styles.nameIcon} style={{ background: color }}>
      <p>{name[0].toUpperCase()}</p>
    </div>
  );
};

export default UserImage;
