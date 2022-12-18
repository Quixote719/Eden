import React, { useEffect } from 'react';
import styles from './index.module.less';
import * as actions from '../actions/earthActions';
import { connect } from 'react-redux';

const Earth = (props: any) => {
  useEffect(() => {
    props.getSystemInfo();
  }, []);

  return (
    <div>
      <div className={styles.pageTitle}>{props?.earth?.galaxy}</div>
      <div className={styles.pageTitle}>Earth</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    earth: state.earthReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // 默认传递参数就是dispatch
  return {
    getSystemInfo: () => actions.getSystemInfo(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Earth);
