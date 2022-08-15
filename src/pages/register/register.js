import './register.scss';


export default function register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Yakubusocial</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Yakubusocial!
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Username' className='loginInput' />
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className="loginInput" />
            <input placeholder='Password again' className="loginInput" />
            <button className='loginButton'>Sign up</button>
            <button className="loginRegisterButton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  )
}