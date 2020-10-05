import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';

// Context
import { UserContext } from './context/UserContext';

function App() {
	const [darkMode, setDarkMode] = useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event) => {
		setDarkMode({
			...darkMode,
			[event.target.name]: event.target.checked,
		});

		const welcomePage = document.querySelector('.enter-site');
		welcomePage.classList.toggle('dark-mode');

		const navBar = document.querySelector('nav');
		navBar.classList.toggle('dark-mode-nav');
	};

	return (
		<Router>
			<UserContext.Provider value={{ darkMode, setDarkMode, handleChange }}>
				{/* <WelcomePage /> */}
				<Nav />
				<Home />
			</UserContext.Provider>
		</Router>
	);
}

export default App;
