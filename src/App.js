import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

// SECTION Components
import Nav from './components/Nav';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import Projects from './components/Projects';
import Resume from './components/Resume';

// SECTION Context
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

		const welcomePage = document.querySelector(
			'.enter-site'
		);
		welcomePage.classList.toggle('dark-mode');

		const navBar = document.querySelector('nav');
		navBar.classList.toggle('dark-mode-nav');
	};

	return (
		<Router>
			<UserContext.Provider
				value={{
					darkMode,
					setDarkMode,
					handleChange,
				}}
			>
				<WelcomePage />
				<Nav />
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/projects'
					component={Projects}
				/>
				<Route
					exact
					path='/resume'
					component={Resume}
				/>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
