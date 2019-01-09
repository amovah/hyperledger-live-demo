import React, { Component } from 'react';
import styles from './index.less';

class Loader extends Component {
  state = {
    loadingDots: '.',
  }

  render() {
    return (
      <div className={styles.root}>
        <h2>
          LOADING LIVE DEMO
        </h2>
        <p>
          {this.state.loadingDots}
        </p>
      </div>
    );
  }
}

export default Loader;
