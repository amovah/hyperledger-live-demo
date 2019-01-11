import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import scroll from 'Root/helpers/scroll';
import Block from './Block';
import styles from './index.less';

class BlockView extends Component {
  content = React.createRef();

  move = (amount) => {
    scroll(this.content.current, amount, 250);
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          className={styles.arrow}
          onClick={() => this.move(-200)}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="4x" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.takeSpace} />
          <div className={styles.content} ref={this.content}>
            {this.props.blocks.map(i => <Block key={generate()} data={i} />)}
          </div>
        </div>
        <div
          className={styles.arrow}
          onClick={() => this.move(200)}
        >
          <FontAwesomeIcon icon={faArrowRight} size="4x" />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  blocks: state.blocks,
}))(BlockView);
