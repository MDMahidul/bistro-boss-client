import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "About Remove this item from cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        /* fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                      "Deleted!",
                      "Your item has been deleted.",
                      "success"
                    );
                  }
                }); */
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          refetch();
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Menu item has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <SectionTitle
        heading={"MANAGE ITEMS"}
        subHeading={"---Hurry Up---"}
      ></SectionTitle>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <div className="uppercase flex justify-between items-center py-5">
          <h3 className="text-3xl text-gray-800 font-smeibold font-second_font">
            Total Item: {menu.length}
          </h3>
        </div>
        <table className="table">
          {/* head */}
          <thead className="">
            <tr className=" bg-yellow-600 text-white border-gray-300">
              <th>SL</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="border-gray-300">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <div className="flex gap-4 justify-start">
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-yellow-600 border-0 text-white btn-sm"
                    >
                      <FiEdit></FiEdit>
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-red-600 border-0 text-white btn-sm"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
