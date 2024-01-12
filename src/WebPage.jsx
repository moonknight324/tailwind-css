import React from "react";

const WebPage = () => {
  return (
    <div>
      <nav className="flex items-center bg-red-500 justify-around p-4">
        <div className="flex items-center mr-7 text-white">
          <h1 className="font-bold text-xl">Kalvium</h1>
        </div>

        <div className=" block flex-grow sm:flex sm:items-center ">
          <div className="sm:flex-grow">
            <a
              href="#"
              className=" mt-4 sm:inline-block mb-3 text-gray-100 mr-4"
            >
              About us
            </a>
            <a href="#" className=" mt-4 text-gray-100 mr-4">
              Courses
            </a>
            <a href="#" className="mt-4 text-gray-100">
              Contacts
            </a>
          </div>
          <div>
            <a
              href="#"
              className="px-4 py-2 border rounded text-gray-200 border-grey mr-4"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="mt-5 mx-10 px-2">
        <button className="bg-blue-700 text-white rounded py-3 px-3 ml-7">
          Button One
        </button>

        <div className="bg-red-300 border text-red-900 px-10 py-4 my-5">
          <strong className="font-bold mr-1">Alert!</strong>
          <p className="sm:inline ml-2"> This is awesome!</p>
        </div>
      </div>
      <div className="flex p-5 bg-white mt-7 max-w-sm mx-auto shadow-xl">
        <img
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          className="h-10 w-15 mt-5 ml-3"
          alt=""
        />

        <div className="ml-8 mb-3 mt-3">
          <h2>Kalvium Store</h2>
          <p className="text-gray-400">You have a new course!</p>
        </div>
      </div>

      <div className="bg-gray-300">
        <div className="text-gray-900 mt-8 text-center p-6">
          © 2021 Copyright : Kalvium
        </div>
      </div>
    </div>
  );
};

export default WebPage;
