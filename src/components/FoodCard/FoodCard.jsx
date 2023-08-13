import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const { name, image, recipe, price,_id } = item;
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item)=>{
      console.log(item);
      if(user && user.email){
        const cartItem= {menuItemId: _id,name,image,price,email:user.email}
        fetch("http://localhost:5000/carts",{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Data add to cart Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      }else{
        Swal.fire({
          title: "Please login to order food",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state: {from:location}})
          }
        });
      }
    }
    return (
      <div>
        <div className="card w-96 bg-white shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-3 py-1 rounded font-semibold'>${price}</p>
          <div className="card-body">
            <div className="text-center space-y-5">
              <h3 className="text-2xl font-semibold text-gray-900">
                {name}
              </h3>
              <p className="text-gray-900">{recipe} </p>
              <button onClick={()=>handleAddToCart(item)} className="btn bg-gray-300 text-yellow-600 text-base border-0 border-b-4 border-yellow-600 bg-opacity-60">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;