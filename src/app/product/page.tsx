type Product={
    id:number;
    name:string;
    username:string;
    phone:string;
    email:string;
}
const ProductPage = async() => {
    /*
    ther response is called after no-catch even if it is by default it will hasnt cach
    but while u r call at top (export const fetchCache="default-cache") it works based on the header (i.e no-store or default)
    */
    await fetch("http://localhost:3001/users");/*by default there catch */
    const reponse=await fetch("http://localhost:3001/users",{next:{
        revalidate:10
    }});/*no catch */
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

export default ProductPage