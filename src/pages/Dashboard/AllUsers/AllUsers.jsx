import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data:users = [],refetch}=useQuery(['users'],async()=>{
        const res = await axiosSecure.get("/users");
        return res.data;
    })

    const handleDelete = (item) => {
      Swal.fire({
        title: "Are you sure?",
        text: "About Remove this user from list",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${item._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              }
            });
        }
      });
    };

    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${user.name} is and Admin Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    }

    return (
      <div className="w-full mb-10 mt-[-80px]">
        <Helmet>
          <title>Bistro Boss | All Users</title>
        </Helmet>
        <SectionTitle
          ts
          subHeading={"---How Many---"}
          heading={"MANAGE USERS"}
        ></SectionTitle>
        <div className="overflow-x-auto px-24">
          <h3 className="text-3xl text-gray-800 font-smeibold font-second_font mb-3">
            Total Users: {users.length}
          </h3>
          <table className="table">
            <thead>
              <tr className=" bg-yellow-600 text-white border-gray-300">
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="border-gray-300">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <>
                        <button onClick={()=>handleMakeAdmin(user)} className="btn btn-sm bg-yellow-600 border-0 text-white">
                          <FaUserShield></FaUserShield>
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn bg-red-600 border-0 text-white btn-sm"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;