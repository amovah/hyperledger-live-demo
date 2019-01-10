import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Content from './Content';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowLeft} size="4x" />
    </div>
    <Content />
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowRight} size="4x" />
    </div>
  </div>
);
