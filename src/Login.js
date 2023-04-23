import { useState } from 'react';
import { Link } from 'react-router-dom';
import './forms.css';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from './AuthContext';
import Button from 'react-bootstrap/Button';
import { Container , Row , Col } from 'react-bootstrap';




function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setTimeActive } = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch(err => alert(err.message))
        } else {
          navigate('/')
        }
      })
      .catch(err => setError(err.message))
  }

  return (

    <>

   <div className='login-div'>
<p className='scl-login'>School Management System</p>
   </div>
        
<Container>
  <Row>
    <Col sm={6}>

      <div className='back-img'>
        
         <img  className='back-img' src='img/sch2-removebg-preview.png' />

      </div>

      </Col>  

      <Col sm={6}>
      
      <div className='center' >

      {/* <img  className='back-img' src='img/sch2-removebg-preview.png' /> */}
      
        <div className='auth'>
          <br />
          <h3>Admin login</h3><br />
          {error && <div className='auth__error'>{error}</div>}
          <form onSubmit={login} name='login_form'>
            <input
              type='email'
              className='input-auth'
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)} />

            <input
              type='password'
              className='input-auth'
              value={password}
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)} />

            <Button variant="secondary" type='submit'>Login</Button>
          </form>
          <p>
            Don't have and account?
            <Link to='/register'>Create one here</Link>
          </p>
        </div>
      </div>
     
      </Col>

    
  </Row>
</Container>
      {/* </div> */}
  
    </>
  )
}

export default Login