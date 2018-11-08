import React from 'react';
import { connect } from 'react-redux';
import {
  showSuccess,
  showWarning,
  showError,
  showInfo,
} from 'uxi-business/userMessage/actions';

const GlobalUserMessageExample = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => {dispatch(showSuccess({ message:'Yo!!' }))}} >Show Success</button>
      <button onClick={() => {dispatch(showWarning({ message:'Dooh!'}))}} >Show Warning</button>
      <button onClick={() => {dispatch(showError({ message:'Dooh Error!'}))}} >Show Error</button>
      <button onClick={() => {dispatch(showInfo({ message:'Just so you know!'}))}} >Show Info</button>
    </div>
  )
}

export default connect()(GlobalUserMessageExample);
