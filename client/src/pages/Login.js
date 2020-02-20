import React, { useState, Fragment } from 'react'
import {Redirect }from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'
import Loading from '../component/layout/Loading'

const LOGIN = ({ isAuthenticated,authLoading,login}) => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })
  const onSubmit = e => {
    e.preventDefault()
    const { name, password } = formData
 
    login({ name, password })
  }
  const onchange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  if (isAuthenticated) return <Redirect to="/" />

  return (
    <Fragment>
      {
        authLoading?<Loading/>:
      
    <div className="h-100 container-fluid">
      <div className="centered-box  d-flex justify-content-center align-items-center">
        <div className="small-box rounded px-3 py-5 mb-5 bg-white h-75 w-100 ">
          <h2 className="text-center text-muted">Login Form </h2>
          <form
            onSubmit={onSubmit}
            className="d-flex h-100 justify-content-center align-items-center"
          >
            <div className="w-100">
              <div className="form-group">
                <label htmlfor="exampleInputEmail1">Email address</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter nombre"
                  required
                  onChange={onchange}
                />
              </div>
              <div className="form-group">
                <label htmlfor="exampleInputPassword1">Contrasena</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Entrar contrasena"
                  required
                  onChange={onchange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-block btn-sm btn-outline-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
    </Fragment>
  )
}
LOGIN.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  authLoading:PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authLoading: state.auth.loading
  
})
export default connect(mapStateToProps, { login })(LOGIN)
