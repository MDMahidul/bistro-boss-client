import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddItem = () => {
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Add Item</title>
        </Helmet>
        <h2 className="text-4xl">Add Item</h2>
      </div>
    );
};

export default AddItem;