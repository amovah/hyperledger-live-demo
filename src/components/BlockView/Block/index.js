import React from 'react';
import styles from './index.less';

export default (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          {props.data.blocknum}
        </p>
      </div>
      <div className={styles.content}>
        a
      </div>
    </div>
  );
};
