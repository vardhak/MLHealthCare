import React from "react";
import dibetes from "../assets/img/dibetes.jpg";
import cancer from "../assets/img/cancer.jpg";
import dengue from "../assets/img/dengue.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Models() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* models section */}

      <section className="min-h-[120vh] w-full pt-[100px] mb-[50px]">
        <div className="flex justify-center items-center text-center flex-col mt-14 mb-8 md:w-[70%] mx-auto">
          <h1
            data-aos="fade-in"
            data-aos-duration="1000"
            className="text-[4rem]"
          >
            Advancing creativity with Machine Learning.
          </h1>
          <h2 data-aos="fade-in" data-aos-duration="1000" className="text-xl">
            Runway is an applied AI research company building the next era of
            art, entertainment and human creativity.
          </h2>
          {/* <button
            data-aos="fade-in"
            data-aos-duration="1000"
            className="border px-2 py-1 border-black rounded-3xl mt-8"
          >
            Our Tools
          </button> */}
        </div>

        {/* model cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:w-[80%] mx-auto px-6 mt-10">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="flex justify-center items-start flex-col"
          >
            <img
              src={dengue}
              alt=""
              className="h-[300px] w-full object-cover bg-fixed"
            />
            <h1 className="text-xl font-bold my-2">Dengue</h1>
            <h2>
              Dengue is a mosquito-borne viral infection that causes flu-like
              symptoms, including high fever, severe headache, and joint pain.
            </h2>
            <button className="mt-6 bg-black text-white w-[40%]  text-2xl">
              <Link to="/models/dengue">Test</Link>
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex justify-center items-start flex-col"
          >
            <img
              src={dibetes}
              alt=""
              className="h-[300px] w-full object-cover"
            />
            <h1 className="text-xl font-bold my-2">Dibeties</h1>
            <h2>
              Diabetes is a chronic condition characterized by high blood sugar
              levels due to the body’s inability to produce or effectively use
              insulin.
            </h2>
            <button className="mt-6 bg-black text-white w-[40%] text-2xl">
              <Link to="/models/dibeties">Test</Link>
            </button>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="flex justify-center items-start flex-col"
          >
            <img
              src={cancer}
              alt=""
              className="h-[300px] w-full object-cover"
            />
            <h1 className="text-xl font-bold my-2">Cancer</h1>
            <h2>
              Cancer is a group of diseases involving the uncontrolled growth
              and spread of abnormal cells in the body, which can disrupt normal
              bodily functions.
            </h2>
            <button className="mt-6 bg-black text-white w-[40%]   text-2xl">
              <Link to="/models/cancer">Test</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
