import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="w-full max-h-max"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <div className="px-8">
        <div className="">
          <h2 className=" text-2xl font-semibold mb-4">Send us a message</h2>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="">
            <div className="flex justify-center flex-col mb-4">
              <label
                className=" bg-transparent block capitalize tracking-wide text-black text-sm font-normal mb-1"
                htmlFor="grid-full-name"
              >
                full name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="appearance-none block w-full bg-white text-black capitalize font-light border-[1.5px] border-colorGrey rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-sm placeholder:font-light"
              />
            </div>
            <div className="flex justify-center flex-col mb-5">
              <label
                className=" bg-transparent block capitalize tracking-wide text-black text-sm font-normal mb-1"
                htmlFor="grid-full-name"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="appearance-none block w-full bg-white text-black font-light border-[1.5px] border-colorGrey rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-sm placeholder:font-light"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center flex-col">
              <label
                htmlFor=""
                className="block capitalize bg-transparent tracking-wide text-primary1 text-sm font-normal mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Type your message here"
                cols="30"
                rows="8"
                className="appearance-none block w-full bg-white text-black font-light border-[1.5px] border-colorGrey rounded py-2 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:font-light placeholder:text-sm"
              ></textarea>
            </div>
            <div className=" w-full flex items-center mt-0">
              <button
                type="submit"
                className=" bg-primary text-white text-[12px] hover:bg-secondary font-normal px-9 py-2 rounded-3xl outline-0"
              >
                Send
              </button>
            </div>
            {/* <p>
              {data.name}, {data.email}, {data.message}
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
