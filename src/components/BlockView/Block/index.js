import React, { Component } from 'react';
import styles from './index.less';

class Block extends Component {
  state = {
    showing: false,
  }

  container = React.createRef();

  componentDidMount() {
    const height = this.container.current.scrollHeight;
    this.container.current.style.setProperty('--max-height', `${height}px`);
  }

  toggleShowing = () => {
    this.setState(prev => ({
      showing: !prev.showing,
    }));
  }

  render() {
    const {
      data,
    } = this.props;

    const css = this.state.showing ? `${styles.active} ${styles.container}` : styles.container;

    return (
      <div
        className={css}
      >
        <div
          className={styles.header}
          onClick={this.toggleShowing}
        >
          <p>
            {data.blocknum}
          </p>
        </div>
        <div
          className={styles.content}
          ref={this.container}
        >
          <div className={styles.scope}>
            <h3>
              Block Hash:
            </h3>
            <p>
              {data.blockhash}
            </p>
          </div>

          <div className={styles.scope}>
            <h3>
              Previous Block Hash:
            </h3>
            <p>
              {data.prehash || 'None'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
