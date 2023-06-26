import { useState, setState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [ userInfo, setUserInfo ] = useState(
        {
            username: '',
            password: ''
        }
    )

    const [ errorMsg, setErrorMsg ] = useState('')
    const [ loggedIn, setLoggedIn ] = useState(false)

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }
  //this is the submit for registering, which will not be normally active
    const handleSubmit = async (event) => {
        event.preventDefault();
    
      

        try{
            const response = await fetch('https://ritual-backend.onrender.com/auth/register',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(userInfo),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
        setUserInfo({ 
            username:'',
            password:'',  
        })
    }
    //this one is for login
    const handleSubmit2 = async (event) => {
        event.preventDefault();
       
      

        try{
            const response = await fetch('https://ritual-backend.onrender.com/auth/login',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(userInfo),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
                if(responseData.message === 'Login successful'){
                    setLoggedIn(true)
                }
            } else{
                console.error('Error submitting data:',response.status);
                setErrorMsg('Incorrect username and/or password. Try again.')
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
        setUserInfo({ 
            username:'',
            password:'',  
        })
    }
    useEffect(() => {
        console.log(loggedIn)
        if(loggedIn){
            navigate('/admin', {state: {loggedIn}})
        }
    },[loggedIn, navigate])
    
    return (
        <div>
            <h1>Ritual Administrative Login</h1>
            <form className="loginForm" onSubmit={handleSubmit2}>
                <input className="loginInput" onChange={handleChange} type="text" name="username" id="username" value={userInfo.username} placeholder="Username" />
                <input className="loginInput" onChange={handleChange} type="password" name="password" id="password" value={userInfo.password} placeholder="Password" />
                <button className="loginBtn" type= "submit">Submit</button>
            </form>
            <div className="errorMsg">{errorMsg}</div>
        </div>
    )
}
export default Login