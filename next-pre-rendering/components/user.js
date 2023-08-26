function User( { user } ) {
    return (
        <>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
            <p>Company catchPhrase: {user.company.catchPhrase} <br></br><br></br></p>
        </>
    )
}

export default User