import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import Block from './Block';
import styles from './index.less';

const BlockView = props => (
  <div className={styles.container}>
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowLeft} size="4x" />
    </div>
    <div className={styles.content}>
      {props.blocks.map(i => <Block key={generate()} data={i} />)}
    </div>
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowRight} size="4x" />
    </div>
  </div>
);

export default connect(state => ({
  blocks: state.blocks,
}))(BlockView);
