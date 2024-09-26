import React from "react";
import ai from "../assets/vid/ai.mp4";
import aibrain from "../assets/img/aibrain.jpg";
import diagnosis from "../assets/img/dia.jpg";
import Plans from "../assets/img/plans.jpg";

export default function Intutions() {
  return (
    <section className=" bg-black text-white pt-[100px]">
      <div className="flex flex-col justify-center items-start w-[90%] mx-auto h-[250px]">
        <h2 data-aos="fade-in" data-aos-duration="1000" className="">
          Intution
        </h2>
        <h1
          data-aos="fade-in"
          data-aos-duration="1000"
          className="text-[1.5rem]"
        >
          We are pioneering general-purpose multimodal simulators of the world.
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
          className="text-[5rem] mb-2"
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
  );
}
