
const UserService = {
    saveUser:async (user)=>{
        const response= await (await fetch('http://localhost:8080//api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })).json()
    },
    saveSchool:async (school)=>{
        const response= await (await fetch('http://localhost:8080//api/school', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(school)
        })).json()
    },
}
export default UserService;
