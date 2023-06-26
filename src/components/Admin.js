import { Link, useNavigate, useLocation } from 'react-router-dom'

const Admin = () =>{
    const location = useLocation()
    const loggedIn = location.state?.loggedIn 
    console.log(loggedIn)
    const navigate = useNavigate()
    const logout = async (event) => {
       try{
            const response = await fetch('https://ritual-backend.onrender.com/auth/logout',{
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json',
        } ,
                  
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
          navigate('/login')
        }

    
    return (
        <div>
            {loggedIn && (
            <ol>
                <Link to='/addproduct'><li>Add a Product</li></Link>
                <Link to='/updateproduct'><li>Update a Product</li></Link>
                <Link to='/deleteproduct'><li>Delete a Product</li></Link>
                <Link to='/addritual'><li>Add a Ritual</li></Link>
                <Link to='/updateritual'><li>Update a Ritual</li></Link>
                <Link to='/deleteritual'><li>Delete a Ritual</li></Link>
                <li onClick={logout}>Logout</li>
            </ol>
            )}
        </div>
    )
}
export default Admin