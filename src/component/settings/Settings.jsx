import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { userList } from "./Db";
// import ''
const Settings = () => {
  const [active, setActive] = useState(true)
  const [users, setUsers] = useState(userList.slice(0, userList.length));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = users
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user) => {
      return (
        <tr className="border-b border-gray-200">
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-500 border-gray-200 rounded mr-4"
              />
              <div className="w-8 h-8 rounded-full mr-3 overflow-hidden">
                <img
                  className="w-full h-full object-fit"
                  src={user.image}
                  alt=""
                />
              </div>
              <span className="text-sm font-medium capitalize">
                {user.name}
              </span>
            </div>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-gray-600 font-normal capitalize">
            {user.username}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-gray-600 font-normal">
            {user.email}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-gray-600 font-normal capitalize">
            {user.role}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-gray-600 font-normal capitalize">
          <span className="bg-[#e7f6ec] text-[#0a801f] px-5 py-2 rounded-3xl">{user.status}</span>
          </td>
          <td className="whitespace-nowrap px-6 py-4 flex justify-end ">
            <button class="px-1 py-1 text-gray-500 ring-1 ring-gray-300/40 transition-colors outline-none hover:bg-gray-200 duration-200 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>
          </td>
        </tr>
      );
    });

  //number of page
  const pageCounter = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="my-9 w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h4>Settings</h4>
          <span className="mx-3">
            {" "}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
            </svg>
          </span>
          <p>Admins</p>
        </div>
        <div className="flex items-center gap-6">
          <button className=" bg-[#fbeae9] text-[#db3c25] text-base  flex items-center px-7 py-2.5 rounded-3xl">
            <span className="mr-2">
              {" "}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </span>
            Export
          </button>

          <button className=" bg-[#db3c25] text-white text-base  flex items-center px-7 py-2.5 rounded-3xl">
            <span className="mr-2">
              {" "}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </span>
            Add New User
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="w-full flex items-center justify-between pl-6 py-4 border bg-[#cfdfd2]">
                <div className="w-full">
                  <form action="">
                    <div className="max-w-max relative flex items-center">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="28"
                        width="28"
                        className="absolute right-3 text-gray-600"
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                      </svg>
                      <input
                        className="min-w-[280px] ring ring-gray-300 px-3 py-2 outline-none rounded-md "
                        type="serach"
                        name=""
                        placeholder="Search here ..."
                      />
                    </div>
                  </form>
                </div>
                <div className="w-full flex justify-end">
                  <form action="">
                    <input
                      type="serach"
                      name=""
                      placeholder="Search here ..."
                    />
                  </form>
                </div>
              </div>
              <table className="min-w-full  border text-left text-sm font-light">
                <thead className="border-b bg-[#cfdfd2] font-medium border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      <div>
                        <input
                          type="checkbox"
                          className="text-[#db3c25] border-gray-300 rounded mr-3"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          Name
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-gray-700 text-sm font-medium"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-gray-700 text-sm font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-gray-700 text-sm font-medium"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-gray-700 text-sm font-medium"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>{displayUsers}</tbody>
              </table>
              <div className="w-full bg-gray-500/70 flex items-center justify-between py-4">
                <div className="">sfjvjkjkd</div>
                <div className=" px-4">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCounter}
                    onPageChange={changePage}
                    // className="flex items-center justify-between gap-3"
                    containerClassName={'paginationBttns'}
                      previousLinkClassName={'prevBttn'}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={'paginateDisabled'}
                      activeClassName={'paginationActive'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
