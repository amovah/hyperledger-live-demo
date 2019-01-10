import React from 'react';
import styles from './index.less';

export default props => (
  <div>
    <div className={styles.header}>
      Live Demo
    </div>
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
);
