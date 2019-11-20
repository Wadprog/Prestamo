import React from 'react';
const Clients = props => {
	return (
		<div className="container-fluid">
			<div className="d-flex justify-content-end">
				<div className="input-group mb-3">
					<input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
					<div className="input-group-append">
						<span className="input-group-text">.00</span>
					</div>
				</div>
			</div>
			<table className="table table-bordered">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Cedula</th>
						<th scope="col">Domicilio</th>
						<th scope="col"> Ref Dirreccion</th>
						<th scope="col">Telefono</th>
						<th scope="col">Actiones</th>
					</tr>
				</thead>
				<tbody className="bg-white">
					<tr>
						<td>Mark</td>
						<td>9999999-9</td>
						<td>50</td>
						<td>{new Date().getMonth()}</td>
						<td>{new Date().getMonth()}</td>
						<td>{new Date().getMonth()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default Clients;
