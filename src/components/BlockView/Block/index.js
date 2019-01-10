import React, { Component } from 'react';
import toggleShowing from 'Root/actions/blocks/toggleShowing';
import styles from './index.less';

class Block extends Component {
  container = React.createRef();

  componentDidMount() {
    const height = this.container.current.scrollHeight;
    this.container.current.style.setProperty('--max-height', `${height}px`);
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <div
        className={styles.container}
      >
        <div
          className={styles.header}
          onClick={() => toggleShowing(data.blockhash)}
        >
          <p>
            {data.blocknum}
          </p>
        </div>
        <div
          className={styles.content}
          ref={this.container}
        >
          a
        </div>
      </div>
    );
  }
}

export default Block;
