import React, { Component } from 'react';
import styles from './index.less';

class Loader extends Component {
  state = {
    loadingDots: '.',
  }

  inter = null;

  componentDidMount() {
    this.inter = setInterval(() => {
      this.setState(prev => ({
        loadingDots: prev.loadingDots.length > 5 ? '.' : `${prev.loadingDots}.`,
      }));
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.inter);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.box}>
          <h1>
            LOADING LIVE DEMO
          </h1>
          <div className={styles.bouncing}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
