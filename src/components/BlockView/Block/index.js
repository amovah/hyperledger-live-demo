import React from 'react';
import toggleShowing from 'Root/actions/blocks/toggleShowing';
import styles from './index.less';

export default (props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => toggleShowing(props.data.blockhash)}
      >
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
