import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuoraHeader from '../QuoraHeader'
import './index.css'

function Index() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('/api/user/allUsers').then((res) => {
            setUsers(res.data)
        })
    }, [])

    return (<>
        <QuoraHeader />
        <div className = 'top-box'>
            <div className = 'top-box-container'>
            <h3>Welcome to College Quora!</h3>
            <p>Follow Quorans to explore your interestes on College Quora</p>
            </div>
            <div className = 'main-content'>
                <h2>Discover All Quorans</h2>
                <p>Check out all these Quorans</p>
                <div className = 'userCards'>
                    {
                        users.map((_user) => (<>
                        <div className = 'userCard'>
                        <div className = 'userCards-content'>
                        <div className ='user-cover-img'>
                            <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJJ-yxUiWooXYwlbuuvzS7gbrPM3vOiKAIQ&usqp=CAU' alt ='converImage' />
                        </div>
                        <div className = 'user-profile-img'>
                            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt ='profileImage' />
                        </div>
                        <h3>{_user.name? _user.name : String(_user.email).split('@')[0]  }</h3>
                        <p>{_user.email}</p>
                    </div>
                    </div>
                        </>))
                    }    
                </div>
            </div>
        </div>
    </>)
}

export default Index
