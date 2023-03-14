import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import VerifyAccount from './pages/VerifyAccount';

const App = () => {
	return (
		<div>
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='login' element={<LoginPage />}></Route>
				<Route path='register' element={<RegisterPage />}></Route>
				<Route path='home' element={<Home />}></Route>
				<Route path='verify/:email' element={<VerifyAccount />}></Route>
			</Routes>
		</div>
	);
};

export default App;