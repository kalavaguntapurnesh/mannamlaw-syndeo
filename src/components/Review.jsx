import React from "react";
import Swal from "sweetalert2";
import { MdArrowRightAlt } from "react-icons/md";

const Review = ({ selectedSlot, formData, onEdit }) => {
  // Format the selected date
  const formattedDate = selectedSlot
    ? selectedSlot.date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      selectedSlot.date.toDateString() !== "" &&
      selectedSlot.time !== ""
    ) {
      Swal.fire({
        icon: "success",
        title: "Booking was successful",
        text: `Your slot is booked for : ${selectedSlot.date.toDateString()} at ${
          selectedSlot.time
        }.
                    Name : ${JSON.stringify(formData.name)}\n
                    Email : ${JSON.stringify(formData.email)}\n
                    `,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not found the data",
        text: "PLEASE enter all fields data!",
      });
    }
  };
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded">
      <div className="text-2xl font-bold text-primaryColor mb-4 text-center ">
        Review & confirm your booking
      </div>

      {/* Timezone */}
      <div className="flex flex-col w-full p-2">
        <div className="flex items-center justify-between">
          <label className="md:text-lg text-sm text-blackColor font-semibold">
            Timezone
          </label>
          <span className="text-sm text-blackColor font-semibold">
            US | EST
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            value={
              formattedDate ? `${formattedDate} at ${selectedSlot.time}` : ""
            }
            readOnly
            className="bg-white shadow p-3 rounded focus:outline-none w-full md:text-base text-sm"
            placeholder="Select a date and time"
          />
          <button
            onClick={() => onEdit(0)} // Navigate to Calendar
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primaryColor text-white text-sm rounded p-1 w-[60px]"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Service */}
      <div className="flex flex-col w-full p-2">
        <label className="md:text-lg text-sm text-blackColor font-semibold">
          Service
        </label>
        <input
          type="text"
          value="Immigration Consultation 1 hour"
          readOnly
          className="bg-white shadow p-3 rounded focus:outline-none w-full md:text-base text-sm"
          placeholder="Immigration Consultation 1 hour"
        />
      </div>

      {/* Staff Member */}
      <div className="flex flex-col w-full p-2">
        <label className="md:text-lg text-sm text-blackColor font-semibold">
          Staff Member
        </label>
        <input
          type="text"
          value="Mannam & Associates, LLC [Attorney / Paralegal]"
          readOnly
          className="bg-white shadow p-3 rounded focus:outline-none w-full md:text-base text-sm"
          placeholder="Mannam & Associates, LLC [Attorney / Paralegal]"
        />
      </div>

      {/* Your Information - Name */}
      <div className="flex flex-col w-full p-2">
        <div className="relative">
          <label className="md:text-lg text-sm text-blackColor font-semibold">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            readOnly
            className="bg-white shadow p-3 rounded focus:outline-none w-full md:text-base text-sm"
            placeholder="Name"
          />
          <button
            onClick={() => onEdit(1)} // Navigate to Information
            className="absolute right-2 top-1/2 transform -translate-y-1/5 bg-primaryColor text-white text-sm rounded p-1 w-[60px]"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Your Information - Email */}
      <div className="flex flex-col w-full p-2">
        <label className="md:text-lg text-sm text-blackColor font-semibold">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            value={formData.email}
            readOnly
            className="bg-white shadow p-3 rounded focus:outline-none w-full md:text-base text-sm"
            placeholder="Email"
          />
          <button
            onClick={() => onEdit(1)} // Navigate to Information
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primaryColor text-white text-sm rounded p-1 w-[60px]"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Confirm Booking Button */}
      {/* <div className="mt-6 flex justify-center border-2 border-red-500 w-[100%]">
        <button
          onClick={handleSubmit}
          className="px-12 py-2 bg-primaryColor text-white rounded text-lg"
        >
          Confirm Booking
        </button>
      </div> */}

      <div className="flex justify-center w-[100%] p-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 flex flex-row items-center justify-center bg-primaryColor text-white rounded lg:w-2/4 w-full"
        >
          Confirm Booking
          <MdArrowRightAlt className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Review;
