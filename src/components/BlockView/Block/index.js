import React from 'react';
import styles from './index.less';

export default (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        {props.data.blocknum}
      </p>
    </div>
  );
};
