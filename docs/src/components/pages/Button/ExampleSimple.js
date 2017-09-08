import React from 'react';
import Button from 'cluedin-ui/Button';
import KeyArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Play from 'material-ui/svg-icons/av/play-arrow';
import ChartIcon from 'material-ui/svg-icons/editor/insert-chart';

const ExampleSimple = () => (
	<div>
		<Button icon={<KeyArrowUp />} iconPosition="after" click={() => {alert('test')}} message="Test" />
    <br/>
    <br/>
    <Button icon={<ChartIcon />} disabled={true} click={() => {}} message="Test" />
    <br/>
    <br/>
    <Button icon={<KeyArrowUp />} type="primary" click={() => {}} message="Test" />
    <br/>
    <br/>
    <Button type="primary" disabled={true} click={() => {}} message="Test" />
    <br/>
    <br/>
    <Button type="secondary" click={() => {}} message="Test" />
    <br/>
    <br/>
    <Button type="secondary"isFullWidth disabled={true} click={() => {}} message="Test" />
  </div>
);

export default ExampleSimple;
