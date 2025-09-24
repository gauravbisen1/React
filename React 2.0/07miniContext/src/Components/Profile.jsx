import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'

//taking data

const Profile = () => {

    const {user} = useContext(UserContext)

    //conditional return
    //false
    if (!user) return <div>Please Login</div>
    //true
    return <div>Welcome {user.username}</div>
}

export default Profile