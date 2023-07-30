import React from "react";
import Form from "./Form";
import HeadOffice from "./HeadOffice";


const AddressForm = () => {
  
  return (
    <div className=" bg-bgGrey py-12 z-20">
      <div className=" vs:w-full md:w-[80%] mx-auto grid vs:grid-cols-1 sm:grid-cols-2 vs:gap-6 sm:gap-0">
        <Form/>
        <HeadOffice />
      </div>
    </div>
  );
};

export default AddressForm;
