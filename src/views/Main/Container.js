import React from 'react';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import About from 'components/About/About.js';
import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <div className={styles.info}>
                <Sidebar />
                <About />
            </div>
        </div>
    );
  }
}

export default Container;
