import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import {onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

import {Container, Title, ErrorMessege } from './styles'
import dying_flower from '../../assets/img/dying_flower.png'


function PageNotFound  (props){

    const [isUser, setIsUser] = useState(false)
    
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        } else {
            setIsUser(false)
            
        }
    })

    return( 
        <>

        <Container>
            <div>
                <Title>404</Title>
                <ErrorMessege> 
                    page not found
                </ErrorMessege>
            </div>
            <img src={dying_flower} alt="dying flower"></img>
            <div>
                <ErrorMessege> 
                    This may not mean anything.
                </ErrorMessege>
                <ErrorMessege> 
                    I'm probably working on something that has blown up.
                </ErrorMessege>
                <ErrorMessege> 
                    Go To
                    {
                        isUser? <Link to='/dashboard'>Dashboard</Link> : <Link to='/'>Login Page</Link>
                    }
                </ErrorMessege>
            </div>
        </Container>
        </>
    )
}

export default PageNotFound 




