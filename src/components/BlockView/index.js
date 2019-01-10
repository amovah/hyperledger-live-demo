import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <FontAwesomeIcon icon={faArrowLeft} size="4x" />
    </div>
    <div className={styles.container}>
      <p>
        Hello fucking there!
      </p>
    </div>
    <div className={styles.right}>
      <FontAwesomeIcon icon={faArrowRight} size="4x" />
    </div>
  </div>
);
