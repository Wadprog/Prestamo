import React from 'react'

const LOGIN = props => {
  return (
    <div className="h-100 container-fluid">
      <div className="centered-box  d-flex justify-content-center align-items-center">
        <div className="small-box rounded px-3 py-5 mb-5 bg-white h-75 w-100 ">
          <h2 className="text-center text-muted">Login Form </h2>
          <form className="d-flex h-100 justify-content-center align-items-center">
            <div className="w-100">
              <div className="form-group">
                <label htmlfor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlfor="exampleInputPassword1">Contrasena</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrar contrasena"
                  required
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
  )
}
export default LOGIN
