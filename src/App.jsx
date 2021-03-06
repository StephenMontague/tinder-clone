import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards';
// import Header from './Components/Header/Header';

function App() {
	return (
		<div className='App'>
			{/* Header */}
			<Header />
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={<TinderCards />}
					/>
					<Route
						exact
						path='/chat'
						element={
							<h1>
								I am the chat page.
							</h1>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

