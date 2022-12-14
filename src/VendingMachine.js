import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CandyBar from './CandyBar';
import Soda from './Soda';
import Pancakes from './Pancakes';

const VendingMachine = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Route exact path='/soda'>
					<Soda />
				</Route>
				<Route exact path='/pancakes'>
					<Pancakes />
				</Route>
				<Route exact path='candybar'>
					<CandyBar />
				</Route>
			</BrowserRouter>

			<h1>I am a vending machine!</h1>
			<p>What delicious treats can I tempt you with?</p>
			<Link exact path='/soda'>
				Soda perhaps?
			</Link>
			<Link exact path='/pancakes'>
				Maybe a stack of pancakes?
			</Link>
			<Link exact path='/candybar'>
				Candy bar more your speed?
			</Link>
		</React.Fragment>
	);
};

export default VendingMachine;
