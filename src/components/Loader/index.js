import React from 'react';
import styles from './index.less';

export default () => (
  <div className={styles.root}>
    <div className={styles.box}>
      <h1>
        LOADING BLOCKS
      </h1>
      <div className={styles.bouncing}>
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);
