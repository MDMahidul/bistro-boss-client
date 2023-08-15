import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data:user = [],refetch}=useQuery(['users'],async()=>{
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    })
    return (
        <div>
            {user.length}
        </div>
    );
};

export default AllUsers;