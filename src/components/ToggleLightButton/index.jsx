import React, {Fragment, useState} from 'react';
import './index.css';

const ToggleLightButton = () => {
	const [isOn, setIsOn] = useState('on');

	function toggleLight() {
		if (isOn === 'on') {
			setIsOn('off');
		}else{
			setIsOn('on');
		}
	}

	return(
		<Fragment>
			<button className="btn"
			onClick={toggleLight}>Turn {isOn} the Speaker</button>
		</Fragment>
	);
}

export default ToggleLightButton;