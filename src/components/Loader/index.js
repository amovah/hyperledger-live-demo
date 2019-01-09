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
    }, 350);
  }

  componentWillUnmount() {
    clearInterval(this.inter);
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
