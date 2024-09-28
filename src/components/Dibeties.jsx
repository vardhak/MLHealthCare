import React from "react";
import dibetes from "../assets/img/dibetes.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Dibeties() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pt-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-10 w-[90%] mx-auto py-10">
        <div className="flex justify-center items-center">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={dibetes}
            alt=""
            className="h-[400px] w-[80%] rounded-[100%] object-cover"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <h1 className="text-[3rem] font-bold mb-2">
            What is Dibeties ? How Exactly it can be identified ?
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem ratione dolor officiis temporibus? Quis fugiat velit
            neque debitis saepe corrupti sed non consectetur, rerum asperiores
            sequi aliquid exercitationem provident at? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Nobis omnis molestias maxime
            distinctio quaerat at voluptates repellat dolor minus culpa?
          </p>
          <button className="border border-black px-2 py-1 text-xl mt-10 hover:underline">
            <Link to="/models">Go Back</Link>
          </button>
        </div>
      </div>

      {/* form to fill data */}
      <div className="">
        <h1
          data-aos="fade-in"
          data-aos-duration="1000"
          className="text-[3.5rem] w-[88%] mx-auto capitalize text-center mt-20"
        >
          Fill The Given Information To Predict You have Dibeties or not ?
        </h1>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="flex justify-center items-center"
        >
          <form action="#" className="mt-10 w-full">
            <div className="flex  justify-between sm:w-[65%] mx-auto my-4">
              <label htmlFor="fever" className="text-xl capitalize">
                1. do you have fever ?
              </label>
              <select
                name="fever"
                id="fever"
                className="px-6 text-xl capitalize outline-double"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="flex  justify-between sm:w-[65%] mx-auto my-4">
              <label htmlFor="Headache" className="text-xl capitalize">
                2. do you have Headache ?
              </label>
              <select
                name="Headache"
                id="Headache"
                className="px-6 text-xl capitalize outline-double"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="flex  justify-between sm:w-[65%] mx-auto my-4">
              <label htmlFor="JointPain" className="text-xl capitalize">
                3. do you have JointPain ?
              </label>
              <select
                name="JointPain"
                id="JointPain"
                className="px-6 text-xl capitalize outline-double"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="flex  justify-between sm:w-[65%] mx-auto my-4">
              <label htmlFor="Bleeding" className="text-xl capitalize">
                4. do you have Bleeding ?
              </label>
              <select
                name="Bleeding"
                id="Bleeding"
                className="px-6 text-xl capitalize outline-double"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <span className="flex justify-center items-center my-6">
              <input
                type="submit"
                value="Predict"
                className="px-4 py-1 text-xl cursor-pointer font-bold border-2 bg-black text-white hover:bg-white hover:text-black hover:border-black"
              />
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
