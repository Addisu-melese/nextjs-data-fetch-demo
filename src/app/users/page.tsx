type User={
    id:number;
    name:string;
    username:string;
    phone:string;
    email:string;
}
const UsersPage = async() => {
    await new Promise((resolve)=>setTimeout(resolve,4000))
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await response.json();
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
        {
            users.map((item:User)=>(
                <div key={item.id} className="flex items-center justify-between p-4 bg-blue-950 shadow rounded-lg">
                    <ul>
                        <li>name;{item.name}</li>
                        <li>user name:{item.username}</li>
                        <li>phone:{item.phone}</li>
                        <li>email:{item.email}</li>
                    </ul>

                </div>

            )
            )
        }
        
    </div>
  )
}

export default UsersPage