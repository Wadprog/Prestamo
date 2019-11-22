import React from 'react';
import { Link } from 'react-router-dom';
const Clients = props => {
	const { clients, handleChange } = props;
	return (
		<div className="container-fluid">
			<div className="my-4 py-4">
				<div className="row mb-0">
					<span className="col-md-4 text-white h4 pt-2" />
					<div className="col-md-4 offset-md-4 ">
						<div className="input-group mb-3">
							<input
								onChange={handleChange}
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
				<div className="card bg-transparent mb-5">
					<div className="card-header">
						<div className="d-flex">
							<h4 className="text-muted">Lista de clientes</h4>
							<span className="ml-auto">
								<Link to="/create_client" className="btn btn-sm btn-outline-info">
									Crear nuevo client
								</Link>
							</span>
						</div>
					</div>
					<div className="bg-transparent">
						{clients.length > 0 ? (
							<table className="my-0 table table-bordered">
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
									{clients.map(client => (
										<tr key={client.id}>
											<td>{client.name}</td>
											<td>9999999-9</td>
											<td>{client.address.street}</td>
											<td>{client.address.suite}</td>
											<td>{client.phone}</td>
											<td>
												<Link
													to={`/client/${client.id}`}
													className="btn btn-sm btn-outline-info mr-2 "
												>
													Ver
												</Link>
												<Link
													to={`/edit_client/${client.id}`}
													className="btn btn-sm btn-outline-warning"
												>
													Modificar
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<h4 className="text-white text-center">
								<i className="fa fa-bug text-danger" />
								 <i> No hay cliente con ese criterio.</i>
							</h4>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Clients;
