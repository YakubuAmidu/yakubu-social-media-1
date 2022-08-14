import './login.scss';

export default function login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Yakubusocial</h3>
          <span className='loginDesc'>
            Connect with friends and the world around on Yakubusocial!
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className="loginInput" />
            <button className='loginButton'>Login</button>
            <span className='loginForgot'>Forgot password</span>
            <button className="loginRegisterButton">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
