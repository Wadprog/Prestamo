import React from 'react';
const Client = props => {
	const {id}=props.match.params;
	return <h1>{` Hello User with id : ${id}`}</h1>;
};
export default Client;
