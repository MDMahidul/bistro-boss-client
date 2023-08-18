import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const {register,handleSubmit,reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data)=>{
        const formData = new FormData();
        formData.append('image',data.image[0]);
        console.log(img_hosting_url);
        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,price,category,recipe} = data;
                const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL};
                console.log(newItem);
                axiosSecure.post('/menu',newItem)
                .then(data=>{
                    if(data.data.insertedId){
                         reset();
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "Item Added Successful!!!",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                    }
                })
            }
        })
    }; 

    return (
      <div className="w-full mb-10 mt-[-20px]">
        <Helmet>
          <title>Bistro Boss | Add Item</title>
        </Helmet>
        <SectionTitle
          ts
          subHeading={"---What's New---"}
          heading={"ADD AN ITEM"}
        ></SectionTitle>
        <div className="mx-24 justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-200 px-10 py-5"
          >
            <div className="form-control mb-4 w-full ">
              <label className="label">
                <span className="font-semibold text-gray-800">
                  Recipe Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full bg-white"
                {...register("name", { required: true, maxLength: 120 })}
              />
            </div>
            <div className="flex gap-8">
              <div className="form-control mb-4 w-full ">
                <label className="label">
                  <span className="font-semibold text-gray-800">Category*</span>
                </label>
                <select
                defaultValue={'Pick One'}
                  className="select select-bordered bg-white"
                  {...register("category", { required: true })}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option value={'pizza'}>Pizza</option>
                  <option value={'soup'}>Soup</option>
                  <option value={'salad'}>Salad</option>
                  <option value={'drinks'}>Drinks</option>
                  <option value={'dessert'}>Dessert</option>
                </select>
              </div>
              <div className="form-control mb-4 w-full ">
                <label className="label">
                  <span className="font-semibold text-gray-800">Price*</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full  bg-white"
                  {...register("price", { required: true })}
                />
              </div>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="font-semibold text-gray-800">
                  Recipe Details*
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-white"
                placeholder="Details"
                {...register("recipe", { required: true })}
              ></textarea>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="font-semibold text-gray-800">
                  Recipe Image*
                </span>
              </label>
              <input
                type="file"
                className="file-input w-full  bg-white"
                {...register("image", { required: true })}
              />
            </div>
            <input type="submit" className="tertiary-btn mb-4" value="add item" />
          </form>
        </div>
      </div>
    );
};

export default AddItem;