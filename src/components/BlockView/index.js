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
          <div className={styles.addition}>
            being there
          </div>
          {this.props.blocks.map((i, index) => (
            <Fragment key={i.blockhash}>
              {
                  index !== 0
                && (
                  <div
                    className={`${styles.connection} ${i.new && styles.new}`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="2x"
                    />
                  </div>
                )
              }
              <Block data={i} className={i.new && styles.new} />
            </Fragment>
          ))}
          <div className={styles.addition}>
            being there
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  blocks: state.blocks.data,
}))(BlockView);
