import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
				<WelcomePage />
				<Nav />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/bio'>
					<Bio />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/resume'>
					<Resume />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
