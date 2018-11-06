import React from 'react';
import { MiniLoader, Loader } from 'uxi/Motion';

const LoaderExample = () => (
  <div>
    <MiniLoader />
    <Loader/>
    <Loader type="error" />
    <Loader type="success" />
    <Loader type="warning" size={80} />
    <MiniLoader type="info" size={40} />
    <MiniLoader type="warning" size={40} />
  </div>
);

export default LoaderExample;
