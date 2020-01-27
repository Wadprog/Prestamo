import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { loadLoans } from '../redux/actions/loans'
import { connect } from 'react-redux'
import Accordion from '../component/Accordion'
import ModifyProfile from '../component/Modals/ModifyProfile'
const Client = ({
  profiles,
  loans,
  match: {
    params: { id }
  }
}) => {
  const [client] = profiles.filter(profile => profile._id === id)

  const clientLoans = loans.filter(loan => loan.client === id)
  const paidLoans = clientLoans.filter(loan => loan.paidStatus)
  const [unpaidLoan] = clientLoans.filter(loan => !loan.paidStatus)

 
  
  const [pageState, setPageState] = useState({
    modifyProfile: false,
    newPayment: false,
    newLoan: false
  })
  const { modifyProfile, newPayment, newLoan } = pageState
  const { Fragment } = React
  const setPage = e => {
    setPageState({ ...pageState, [e.target.name]: true })
  }
  const closeModals = () => {
    setPageState({ modifyProfile: false, newPayment: false, newLoan: false })
  }
  return (
    <Fragment>
      {modifyProfile && <ModifyProfile id={id} closeModals={closeModals} />}
      <div className="container pt-5">
        <div className="d-flex text-white pb-5 border-bottom ">
          <i className="fa fa-user fa-5x p-5 bg-primary  mr-5" />
          {client !== undefined && (
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
                <button
                  onClick={setPage}
                  name="modifyProfile"
                  type="button"
                  className="btn btn-outline-warning"
                >
                  Modificar
                </button>

                <button type="button" className="btn btn-outline-info">
                  Nuevo Prestamo
                </button>
              </div>
            </div>
          )}
        </div>
        {clientLoans !== null && clientLoans.length > 0 ? (
          <Fragment>
            {unpaidLoan !== {} && unpaidLoan && (
              <Fragment>
                <h6 className="text-white mt-4">Prestamo Activo</h6>

                <ul className="list-group mb-5 ">
                  <li key={unpaidLoan._id} className="list-group-item mb-1 p-0">
                    <Accordion {...unpaidLoan} />
                  </li>
                </ul>
              </Fragment>
            )}

            {paidLoans !== null && paidLoans.length > 0 && (
              <Fragment>
                <h6 className="text-white mt-5 mb-2">
                  Lista de prestamos pagados{' '}
                </h6>
                <ul className="list-group mb-5 ">
                  {paidLoans.map(loan => (
                    <li key={loan._id} className="list-group-item mb-1 p-0">
                      <Accordion {...loan} />
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <h6 className="text-white text-center">
            Este cliente no tiene registro de deuda
          </h6>
        )}
      </div>
    </Fragment>
  )
}
Client.prototype = {
  profiles: PropTypes.array.isRequired,
  loans: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  profiles: state.profile.profiles,
  loans: state.loan.loans
})
export default connect(mapStateToProps, { loadLoans })(Client)
