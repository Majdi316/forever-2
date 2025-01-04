//TODO Libraries
import React from "react";
//TODO Pages
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center text-gray-600 gap-6 md:w-2/4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            autem. Ad tempore assumenda nobis voluptatum iusto architecto hic
            recusandae impedit eligendi laudantium alias nulla facere minus,
            esse quidem rem in?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corporis et optio amet aspernatur asperiores porro quibusdam
            doloremque minus sint! Adipisci voluptas sequi nihil porro, totam
            consectetur. Vero, voluptates voluptatem?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            voluptatibus. Vero voluptatum temporibus corporis, eveniet quam
            deserunt doloremque voluptates praesentium ipsa error, distinctio,
            odio a vel dicta quidem dolorem excepturi?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eligendi iste cum. Nulla temporibus voluptas laboriosam,
            necessitatibus quos ab voluptatum voluptates minus harum porro
            provident praesentium aut sed. Impedit, nesciunt?
          </p>
        </div>
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eligendi iste cum. Nulla temporibus voluptas laboriosam,
            necessitatibus quos ab voluptatum voluptates minus harum porro
            provident praesentium aut sed. Impedit, nesciunt?
          </p>
        </div>
        <div className="flex flex-col border gap-5 px-10 md:px-16 py-8 sm:py-20">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eligendi iste cum. Nulla temporibus voluptas laboriosam,
            necessitatibus quos ab voluptatum voluptates minus harum porro
            provident praesentium aut sed. Impedit, nesciunt?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
