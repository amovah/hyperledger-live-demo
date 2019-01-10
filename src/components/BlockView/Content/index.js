import React from 'react';
import { connect } from 'react-redux';
import styles from './index.less';

const Content = (props) => {
  console.log('a');

  return (
    <div className={styles.container}>
      {props.blocks.map(i => <p>{i.blocknum}</p>)}
    </div>
  );
};

export default connect(state => ({
  blocks: state.blocks,
}))(Content);
