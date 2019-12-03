import React, { useState, useEffect } from 'react'
import { filterProfiles } from '../redux/actions/profile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Clients = ({ profiles, profilesFiltered, filterProfiles }) => {


  let filteredClients = [...profilesFiltered]

  const handleChange = e => {
    filterProfiles(e.target.value.toLowerCase(), profiles)
  }

  const { Fragment } = React

  return (
    <Fragment>
     
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
                <Link
                  to="/create_client"
                  className="btn btn-sm btn-outline-info"
                >
                  Crear nuevo client
                </Link>
              </span>
            </div>
          </div>
          <div className="bg-transparent">
            {filteredClients.length > 0 ? (
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
                  {filteredClients.map(client => (
                    <tr key={client._id}>
                      <td>{client.name}</td>
                      <td>{client.cedula}</td>
                      <td>{client.address}</td>
                      <td>{client.addressRef}</td>
                      <td>{client.tel}</td>
                      <td>
                        <Link
                          to={`/client/${client._id}`}
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
    </Fragment>
  )
}
Clients.propTypes = {
  profiles: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  profilesFiltered: state.profile.filteredProfiles,
  profiles: state.profile.profiles
})
export default connect(mapStateToProps, { filterProfiles })(Clients)
