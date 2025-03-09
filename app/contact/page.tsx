"use client"
import React, { useEffect, useState } from "react";
import { ContactIMG } from "@/Components/CntactImg";
import ConIcon from "@/Components/ConIcon";
import { Waiting } from "@/Components/Wait";

const Page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);
  
  return (
    <>
    {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Waiting />
            </div>
          ) :(
            <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl m-10 font-bold text-black">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-8/12 ">
          <ContactIMG />
        </div>
        <div className="border-r-4 border-purple-950" data-aos="zoom-out"></div>
        <div className="w-full md:w-4/12 mt-12">
          <div className=" flex justify-center items-center">
            <form action={"https://api.web3forms.com/submit"} method="post">
              <div>
                <input type="hidden" name="access_key" value="4cfd6cfb-db18-4b51-9c4d-0f1ff632ce8f" />
              </div>
              <div className="input-group py-4 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-purple-950 w-full sm:w-72 border-2 border-purple-950 p-3 rounded-full"
                  required
                />
              </div>
              <div className="input-group py-4 ">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email / Whatsapp"
                  className="text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-purple-950 w-full sm:w-72 border-2 border-purple-950 p-3 rounded-full"
                  required
                />
              </div>

              <div>
                <input
                  type="hidden"
                  name="redirect"
                  value="https://bhuvanbhusal.com.np"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="mx-16 font-semibold  py-1 bg-purple-950 text-white px-4 text-lg md:text-2xl rounded-3xl "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <ConIcon />
        </div>
      </div>
      </>
          )}
      
    </>
  );
};

export default  (Page);
