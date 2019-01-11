import React from 'react';
import styles from './index.less';

export default props => (
  <div>
    <div className={styles.header}>
      <h1>
        {'hyperledger blockchain live demo'.toUpperCase()}
      </h1>
    </div>
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
);
