import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
import background from './bgmges.jpg';

function App() {
  // JS code 
  const [uname,setUname]  = useState('')
  const [email,setEmail] = useState('')
  const [passwrd,setPassword] = useState('')
  const [confirmPass,setConfirmPass] = useState('')

  const [validName,setValidName] = useState('true')
  const [validEmail,setValidEmail] = useState('true')
  const [validPass,setValidPass] = useState('true')
  const [validCnfrm,setValidCnfrm] = useState('true')
 


  const validateUser = (e)=>{
    
    const {name,value} = e.target

    if(name === 'uname'){
      if(!!value.match(/^[a-zA-Z ]+$/)){
        setUname(value)
        setValidName(true)
      }else{
        setUname(value)
        setValidName(false)
      }
    }else if(name === 'email'){
      if(!!value.match(/^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+(@)+[a-zA-Z]+(.com)$/)){
        setEmail(value)
        setValidEmail(true)
      }else{
        setEmail(value)
        setValidEmail(false)
      }
    }else if(name === 'passwrd'){
      // password condition checking as below 
      if(!!value.match( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@.!#$%&'*+-/=?^_`{|}~])[A-Za-z\d@.!#$%&'*+-/=?^_`{|}~]{8,16}$/ )){
        setPassword(value)
        setValidPass(true)
      }else{
        setPassword(value)
        setValidPass(false)
      }
    }else if(name === 'cnfrm'){
      if(value === passwrd){
        setConfirmPass(value)
        setValidCnfrm(true)
      }else{
        setConfirmPass(value)
        setValidCnfrm(false)
      }
    }
  }


  const handleSubmit = (e)=>{
    e.preventDefault()
    alert('Registered Successfully...Please login!!!')
  }


  // JSX Code
  return (
    <div style={{width:'100%',backgroundImage: `url(${background})`, backgroundSize:'cover' }} className=' d-flex justify-content-center align-item-center'>
      <div style={{width:'500px'}} className='bg-dark-subtle d-flex flex-column p-5 m-3 rounded shadow-lg '>
        <h1 style={{textAlign:'center'}} className='p-3 fw-bold text-primary'>REGISTER FORM</h1>

        <form onSubmit={handleSubmit}>

          {/* ------NAME------ */}
          <div className=''>
            <TextField className='w-100' color='success' id="outlined-basic" label="Name" name='uname' type='text'  variant="outlined" value={uname || ''} onChange={(e)=>validateUser(e)}/>
          </div>

          {
            !validName && 
            <div className='text-danger'>
              *Invalid Name 
            </div>
          }

          {/* ------EMAIL------ */}
          <div className='mt-3'>
            <TextField className='w-100' color='success' id="outlined-basic" label="Email" name='email' type='email' variant="outlined" value={email || ''} onChange={(e)=>validateUser(e)}/>
          </div>

          {
            !validEmail && 
            <div className='text-danger'>
              *Invalid Email ID
            </div>
          }

          {/* ------PASSWORD------ */}
          <div className='mt-3'>
            <TextField className='w-100' color='success' id="outlined-password-input" label="Password" name="passwrd" type="password" autoComplete="current-password" value={passwrd || ''} onChange={(e)=>validateUser(e)}/>
          </div>

          {
            !validPass && 
            <div className='text-danger fs-8'>
              *The password must contain min 8 character and max 16 character and Password must contain atleast one Uppercase letter, Lowercase letter , number and SpecialCharacter
            </div>
          }

          {/* ------CONFIRM PASSWORD------ */}
          <div className='mt-3'>
            <TextField disabled={passwrd !== '' && validPass?false:true} className='w-100' color='success' id="outlined-password-input" label="Confirm Password" name='cnfrm' type="password" autoComplete="current-password" value={confirmPass || ''} onChange={(e)=>validateUser(e)}/>
          </div>

          {
            !validCnfrm && 
            <div className='text-danger'>
              *password doesn't match with above written password
            </div>
          }

          {/* ------SUBMIT BUTTON------ */}
          <div className='d-flex justify-content-center align-item-center'>
            <Button className='p-2 w-50 mt-3 fw-bold fs-4 text-white' color='success' type='submit' variant="contained" disabled={(validName && validEmail) && (validPass && validCnfrm) && (uname !== '' && email !== '') && (passwrd !== '' && confirmPass !== '') && (passwrd === confirmPass)?false:true}>SIGN UP</Button>
          </div>

        </form>

        <div className='d-flex justify-content-center align-item-center mt-2'>
          <h6 className='mt-3 text-dark'>Have an Account? <span className='text-primary'>Login Here</span></h6>
        </div>
        
      </div>
    </div>
  );
}

export default App;
