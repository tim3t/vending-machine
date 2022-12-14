import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Pancakes from './Pancakes';
import CandyBar from './CandyBar';

function App() {
	return (
		<BrowserRouter>
			<Route exact path='/'>
				<VendingMachine />
			</Route>
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
	);
}

export default App;
