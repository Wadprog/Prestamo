import React, { useState, useEffect } from 'react';
import Clientes from '../component/Clients';
const Clients = props => {
	const [ items, setItems ] = useState([]);
	const [ filteredClients, setFilteredClients ] = useState([]);
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
			console.log(`Error retriving the users ${error}`)
		}
		
	};
	const handleChange = e => {
		let filter = items.filter(item => !item.name.toLowerCase().indexOf(e.target.value.toLowerCase()));
		setFilteredClients(filter);
	};
	return <Clientes clients={filteredClients} handleChange={handleChange} />;
};
export default Clients;
