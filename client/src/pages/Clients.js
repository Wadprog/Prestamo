import React from 'react';
const Clients = props => {
	return (
		<div className="container-fluid">
			<div className="my-4 py-4">
				<div className="row mb-0">
					<span className="col-md-4 text-white h4 pt-2">Lista de cliente</span>
					<div className="col-md-4 offset-md-4 ">
						<div className="input-group mb-3">
							<input
								placeholder="Buscar ..."
								type="text"
								className="form-control"
								aria-label="Amount (to the nearest dollar)"
							/>
							<div className="input-group-append">
								<span className="input-group-text">
									<i className="fa fa-user" />
								</span>
							</div>
						</div>
					</div>
				</div>
				<table className="mt-0 table table-bordered">
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
							<td>
								<button className="btn btn-sm btn-outline-info mr-2 ">Ver</button>
								<button className="btn btn-sm btn-outline-danger">Borrar</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Clients;
