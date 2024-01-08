import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import styles from './index.module.less';

const Earth = () => {
  const AsiaRef = useRef();
  const AfricaRef = useRef();
  const EuropeRef = useRef();

  useEffect(() => {
    console.log('ref', AsiaRef, AfricaRef);
    if (AsiaRef.current?.getName) {
      console.log(AsiaRef.current.getName());
    }
    if (AfricaRef.current?.getName) {
      console.log(AfricaRef.current.getName());
    }
    if (EuropeRef.current?.requestData) {
      console.log(EuropeRef.current.requestData());
    }
  });

  return (
    <div>
      <div className={styles.pageTitle}>Earth</div>
      <Asia ref={AsiaRef} />
      <Africa ref={AfricaRef} />
      <Europe ref={EuropeRef} />
    </div>
  );
};

class Asia extends React.PureComponent {
  constructor(props) {
    super(props);
    this.name = 'Asia';
    this.childRef = React.createRef();
  }

  getName = () => {
    return this.name + '!';
  };

  render() {
    console.log('Korean', this.childRef);
    return (
      <div>
        <div>{this.name}</div>
        <Korean ref={this.childRef} />
      </div>
    );
  }
}

class Korean extends React.PureComponent {
  constructor(props) {
    super(props);
    this.name = 'Korean';
  }

  getName = () => {
    return this.name + '~';
  };

  render() {
    return <div>{this.name}</div>;
  }
}

class Africa extends React.PureComponent {
  constructor(props) {
    super(props);
    this.name = 'Africa';
  }

  getName = () => {
    return this.name + '!';
  };

  render() {
    return <div>{this.name}</div>;
  }
}

const Europe = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => ({
    requestData: getData
  }));

  const getData = () => {
    return 'Europe~';
  };

  return <div>Europe</div>;
});

export default Earth;
