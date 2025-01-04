type Product={
    id:number;
    name:string;
    username:string;
    phone:string;
    email:string;
}
const Layout =async() => {const reponse1=await fetch("http://localhost:3001/users");/*by default there catch */
    const reponse=await fetch("http://localhost:3001/users",{cache:"no-store"});/*no catch */
    const product= await reponse.json();
    console.log('first')
    console.log(product)
  return (
    <div>
        {
            product.map((item:Product)=>(
                <ul key={item.id}>
                    <li>Name:{item.name}</li>
                    <li>User Name:{item.username}</li>
                    <li>Phone:{item.phone}</li>
                    <li>Email:{item.email}</li>

                </ul>
            ))
        }
    </div>
  )
}

export default Layout