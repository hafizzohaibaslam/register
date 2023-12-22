import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://1hics869g1.execute-api.us-east-1.amazonaws.com/dev/register", formData);
      console.log(response.data);
      setMessage("User registered successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full px-14 sm:px-4 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl mb-10">Registration Form</h1>

        {/* Email */}
        <div className="my-4">
          <input
            className="text-[#6C737F] text-[14px] border border-[#D2D6DB] rounded-[10px] w-[500px] py-2 px-3 h-[47px] bg-[white] focus:outline focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="my-4">
          <input
            className="text-[#6C737F] text-[14px] border border-[#D2D6DB] rounded-[10px] w-[500px] py-2 px-3 h-[47px] bg-[white] focus:outline focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <p className="text-center text-[green] text-[14px] my-3">{message}</p>

        <div className="mt-4 w-full">
          <button
            className="w-[500px] bg-[#019320] text-white font-bold py-3 px-4 rounded-[12px] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
