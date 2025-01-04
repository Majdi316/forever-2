//TODO Libraries
import React from "react";

const NewsLetterBox = () => {
  //TODO Functions
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-800 font-medium">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        obcaecati culpa sunt perferendis mollitia provident dolorem architecto
        doloribus officia voluptates quae itaque quam vitae doloremque, minus
        iusto commodi praesentium? Commodi.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
