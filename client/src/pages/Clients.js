import React, { useState, useEffect } from 'react';
import Clientes from '../component/Clients';
const Clients = props => {
	
const [ items, setItems ] = useState([]);
	const [ filteredClients, setFilteredClients ] = useState([]);
	const [ err, setErr ] = useState(false);
	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			let data = await fetch('https://jsonplaceholder.typicode.com/users');
			data = await data.json();
			setItems(data);
			setFilteredClients(data);
		} catch (error) {
			setErr(true);
			console.log(`Error retriving the users ${error}`);
		}
	};

	const handleChange = e => {
		let filter = items.filter(item => !item.name.toLowerCase().indexOf(e.target.value.toLowerCase()));
		setFilteredClients(filter);
	};


	const { Fragment } = React;
	
	return (
		<Fragment>
			{!err ? (
				<Clientes clients={filteredClients} handleChange={handleChange} />
			) : (
				<h1 className="mt-5 pt-5 text-center text-danger">No se pudo connectarse al servidor </h1>
			)}
		</Fragment>
	);
};
export default Clients;
