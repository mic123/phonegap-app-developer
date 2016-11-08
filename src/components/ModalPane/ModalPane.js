import { h } from 'preact';

import { Button } from 'topcoat-preact';

import styles from './index.less';

console.log(styles);

const ModalPane = ({ children, modal, open }, state) => (
  <div className={ `${styles.modal} ${open ? styles.open : ''}` }>
    { children }
  </div>
);

export default ModalPane;