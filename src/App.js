import './App.css';
import Nav from './components/Nav';
import Visual from './components/Visual';
import Profile from './Routes/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav></Nav>
				<Routes>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/filmography"></Route>
					<Route path="/videos"></Route>
					<Route path="/gallery"></Route>
					<Route path="/" element={<Visual />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
