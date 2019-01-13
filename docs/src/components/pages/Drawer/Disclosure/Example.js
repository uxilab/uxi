import React, { Component } from 'react';
import Button from 'uxi/Button';
import { P } from 'uxi/Classic';
import { Disclosure } from 'uxi/Drawer';
import { Close } from 'uxi/Icons';
import Alert from 'uxi/Alert';


class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
    };
  }

  render() {
    return (
      <div>
        <div style={{ margin: '8px', padding: '16px', border: '1px solid black', background: 'lightgrey' }}>
          <Disclosure
            detail={(
              <ul>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
              </ul>
            )}
          />
        </div>
        <br />
        <br />
        <div>

          <Disclosure
            detail={(
              <ul>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
              </ul>
            )}
          />
        </div>
        <br />
        <br />
        <div>
          <Disclosure
            anchor="top"
            detail={(
              <ul>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
                <li>lots of details hiddne here</li>
              </ul>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ExampleSimple;
