import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
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
        <div className={styles.takeSpace} />
        <div className={styles.content} ref={this.content}>
          <span className={styles.addition}>
            being there
          </span>
          {this.props.blocks.data.map((i, index) => (
            <Fragment key={i.blockhash}>
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
          <span className={styles.addition}>
            being there
          </span>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  blocks: state.blocks,
}))(BlockView);
