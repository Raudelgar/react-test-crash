import React from 'react';
import './App.css';
import Album from '../album/Album';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
					data-test='react-main'
				>
					Learn React
				</a>
				<Album />
			</header>
		</div>
	);
}

export default App;
