import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
	return (
		<div>
			<React.Fragment>
				<h1>I am a vending machine!</h1>
				<p>What delicious treats can I tempt you with?</p>
			</React.Fragment>
			<React.Fragment>
				<Link exact to='/soda'>
					Soda perhaps?
				</Link>
				<Link exact to='/pancakes'>
					Maybe a stack of pancakes?
				</Link>
				<Link exact to='/candybar'>
					Candy bar more your speed?
				</Link>
			</React.Fragment>
		</div>
	);
};

export default VendingMachine;
