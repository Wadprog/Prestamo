import React from 'react';
const Client = props => {
	const { id } = props.match.params;
	
	const { Fragment } = React;
	return (
		<Fragment>
			<h1>{` Hello User with id : ${id}`}</h1>
			<div className="container">
				<div className="d-flex text-white pb-5 border-bottom ">
					<i className="fa fa-user fa-5x p-5 bg-primary  mr-5" />
					<div className="text-white">
						<h6>Nombre nombre</h6>
						<h6>Cedula nombre</h6>
						<h6>Fecha de Cumpleano: nombre</h6>
						<h6>Direccion nombre</h6>
						<h6>Referencia nombre</h6>
						<h6>calificacion nombre</h6>
					</div>
				</div>
				<h6 className="text-withe">Informaciones de indentidad</h6>
				<h6 className="text-withe">Informaciones de contacto</h6>
			</div>
		</Fragment>
	);
};
export default Client;
