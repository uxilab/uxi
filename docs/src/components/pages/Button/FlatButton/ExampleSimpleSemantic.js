import React from 'react';
import { FlatButton } from 'uxi/Button';
import { Done } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleSemantic = () => (
  <List>
    <FlatButton type="error" text="error" />
    <FlatButton type="primary" text="primary" />
    <FlatButton type="secondary" text="secondary" />
    <FlatButton type="warning" text="warning" />
    <FlatButton type="info" text="info" />
    <FlatButton type="success" text="success" />
    <FlatButton text="success" link="http://google.com" icon={<Done />}/>

    <FlatButton icon={<Done />} type="error" text="error" iconPosition="after"  />
    <FlatButton icon={<Done />} type="primary" text="primary" iconPosition="after"  />
    <FlatButton icon={<Done />} type="secondary" text="secondary" iconPosition="after"  />
    <FlatButton icon={<Done />} type="warning" text="warning" iconPosition="after"  />
    <FlatButton icon={<Done />} type="info" text="info" />
    <FlatButton icon={<Done />} type="success" text="success" />
    <FlatButton icon={<Done />} text="success" link="http://google.com" icon={<Done />}/>
  </List>
);

export default ExampleSimpleSemantic;
