import React, { Component, Fragment } from 'react';
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
          <div className={styles.takeSpace} />
          <FontAwesomeIcon icon={faArrowLeft} size="4x" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.takeSpace} />
          <div className={styles.content} ref={this.content}>
            {this.props.blocks.map((i, index) => (
              <Fragment key={generate()}>
                <Block data={i} />
                {
                  index + 1 !== this.props.blocks.length
                  && (
                    <div
                      className={styles.connection}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="2x"
                      />
                    </div>
                  )
                }
              </Fragment>
            ))}
          </div>
        </div>
        <div
          className={styles.arrow}
          onClick={() => this.move(200)}
        >
          <div className={styles.takeSpace} />
          <FontAwesomeIcon icon={faArrowRight} size="4x" />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  blocks: state.blocks,
}))(BlockView);
