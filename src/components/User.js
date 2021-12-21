import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import Logout from './Logout'

function User ({ userData, fetchUsers}) {
    useEffect( () => {
        fetchUsers()
    }, [fetchUsers])

    return userData.loading ? (
        <>
            <h2>loading...</h2>
            <Logout/>
        </>
    ) : userData.error ? (
        <>
            <h2>{userData.error}</h2>
            <Logout/>
        </>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {userData &&
                userData.users &&
                userData.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
            <Logout/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)