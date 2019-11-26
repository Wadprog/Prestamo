import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Client from './pages/Client';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
	const { Fragment } = React;
	return (
		<Provider store={store}>
			<Fragment>
				<main>
					<Navbar />
					<div className="container-fluid mt-2">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/clients" component={Clients} />
							<Route path="/client/:id" component={Client} />
						</Switch>
					</div>
					<Footer />
				</main>
			</Fragment>
		</Provider>
	);
}

export default App;
