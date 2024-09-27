import React from "react";
import bg from "../assets/vid/bg.mp4";
import ai from "../assets/vid/ai.mp4";
import dibetes from "../assets/img/dibetes.jpg";
import aibrain from "../assets/img/aibrain.jpg";
import cancer from "../assets/img/cancer.jpg";
import dengue from "../assets/img/dengue.jpg";
import diagnosis from "../assets/img/dia.jpg";
import Plans from "../assets/img/plans.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function home() {
  return (
    <div className="overflow-hidden">
      {/* navbar section */}

      {/* bg video section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="min-h-[120vh] min-w-full object-cover bg-fixed"
      >
        <source src={bg} type="video/mp4" />
      </video>

      <div className="cen text-white text-center">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-[4.3rem] sm:text-[5rem] font-bold"
        >
          Introducing Diagno.
        </h1>
        <h2
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-offset="0"
          className="text-xl"
        >
          A new frontier for fast, high-accurate, preciesd model for healthCare.
        </h2>
      </div>

      {/* models section */}

      <section className="min-h-[120vh] w-full">
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
          <button
            data-aos="fade-in"
            data-aos-duration="1000"
            className="border px-2 py-1 border-black rounded-3xl mt-8"
          >
            <Link to="/models">Our Tools</Link>
          </button>
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
          </div>
        </div>
      </section>

      {/* about section */}

      <section className="mt-8 bg-black text-white">
        <div className="flex flex-col justify-center items-start w-[90%] mx-auto h-[250px]">
          <h2 data-aos="fade-in" data-aos-duration="1000" className="">
            Intution
          </h2>
          <h1
            data-aos="fade-in"
            data-aos-duration="1000"
            className="text-[1.5rem] "
          >
            We are pioneering general-purpose multimodal simulators of the
            world.
          </h1>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:gap-14 mx-auto w-[92%]"
        >
          <div>
            <img src={diagnosis} alt="" className="h-[250px] object-cover" />
            <h1>Early Diagnosis and Detection</h1>
          </div>

          <div>
            <img src={Plans} alt="" className="h-[250px] object-cover" />
            <h1> Personalized Treatment Plans</h1>
          </div>

          <div>
            <img src={aibrain} alt="" className="h-[250px] object-cover" />
            <h1> Predictive Analytics for HealthCare</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <h1
            data-aos="fade-in"
            data-aos-duration="1000"
            className="text-[5rem] mb-2 text-center"
          >
            For anyone who wants to diagnos.
          </h1>

          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            src={ai}
            autoPlay
            muted
            loop
            playsInline
            className="w-[70%] h-[450px] object-cover "
            typeof="video/mp4"
          ></video>
        </div>
      </section>
    </div>
  );
}
