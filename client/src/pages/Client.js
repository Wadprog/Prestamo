import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const Client = props => {
  const { id } = props.match.params
  const { Fragment } = React
  const { profiles } = props
  let client = {}
  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i]._id == id) {
      client = profiles[i]
    }
  }
  profiles.map(profile => {
    console.log(profile)
    if (id == profile._id) return profile
  })
  console.log(`all ${profiles} and client ${client[0]}`)
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="d-flex text-white pb-5 border-bottom ">
          <i className="fa fa-user fa-5x p-5 bg-primary  mr-5" />
          <div className="text-white">
            <h6>
              <span className="text-dark text-bold mr-2">Nombre:</span>{' '}
              {client.name}
            </h6>
            <h6>
              <span className="text-dark text-bold mr-2">Cedula:</span>{' '}
              {client.cedula}
            </h6>
            <h6>
              <span className="text-dark text-bold mr-2">Direccion:</span>{' '}
              {client.address}
            </h6>
            <h6>
              <span className="text-dark text-bold mr-2">Referencia:</span>{' '}
              {client.addressRef}
            </h6>
            <div className="btn-group mt-3">
              <button type="button" className="btn btn-outline-warning">
                Modificar
              </button>

              <button type="button" className="btn btn-outline-info">
                Nuevo Prestamo
              </button>
            </div>
          </div>
        </div>
		<h6 className="text-white mt-4">Prestamo Activo</h6>

		<ul class="list-group mb-5 ">
		<li className="list-group-item mb-1 bg-info">Dapibus ac facilisis in</li>
       </ul>

        <h6 className="text-white mt-5 mb-2">Lista de prestamos pagados </h6>
		
	    <ul class="list-group mb-5 ">
          <li className="list-group-item mb-1">Cras justo odio</li>
          <li className="list-group-item mb-1">Dapibus ac facilisis in</li>
          <li className="list-group-item mb-1">Morbi leo risus</li>
          <li className="list-group-item mb-1">Porta ac consectetur ac</li>
          <li className="list-group-item mb-1">Vestibulum at eros</li>
        </ul>

        <h6 className="text-withe">Informaciones de contacto</h6>
      </div>
    </Fragment>
  )
}
Client.prototype = {
  profiles: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  profiles: state.profile.profiles
})
export default connect(mapStateToProps)(Client)
