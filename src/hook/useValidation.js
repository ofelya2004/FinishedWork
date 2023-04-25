import { useState } from "react"

export default function(){
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorDateCheckIn, setErrorDateCheckIn] = useState('');
    const [errorDateCheckOut, setErrorDateCheckOut] = useState('');
    const [errorName,setErrorName] =useState('')
    

    function regValidation(val, type,label){
        const regexVal = /.+@[^@]+\.[^@]{2,}$/
        const regexval2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        const regexVal4 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/

        if(!regexVal.test(val) && val != '' && type == 'email'){
          setErrorEmail('error email')
        }else if(val == '' && type == 'email'){
          setErrorEmail('Fill the line')
        }else if(regexVal.test(val) && type == 'email'){
          setErrorEmail('')
        }

        if(!regexval2.test(val) && val != '' && type == 'password'){
          setErrorPass('Ooopss!!! Minimum eight characters, at least one letter, one number and one special character:')
      }else if(val == '' && type == 'password'){
        setErrorPass('Fill the password')
      }else if(regexval2.test(val) && type == 'password'){
          setErrorPass('')
      }

 

  if(!regexVal4.test(val) && val != '' && type == 'text'){
    setErrorName('Invalid Username')
  }else if(val == '' && type == 'text'){
    setErrorName('Fill the Username')
  }else if(regexVal4.test(val) && type == 'text'){
    setErrorName('')
  }
      }

      return{
      item:{
        func:regValidation,
        email:errorEmail,
        pass:errorPass,
        name:errorName,
        date:errorDateCheckIn,
        date1:errorDateCheckOut
      }}
      
}