import React from "react";
import './style.scss';
import {useSelector} from "react-redux";

const Users = () => {
    const {usersList} = useSelector(({users}) => users);
    console.log(usersList);

    return (
        <div className='users'>
            users
        </div>
    )
}
export default Users;