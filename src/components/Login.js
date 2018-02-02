import React from 'react'

const Login = () =>{

    return(
      <div className="ui center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui form">
            <div className="ui stacked secondary  segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="ui fluid large blue submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
          </div>
        </div>
      </div>

    )
}

export default Login
