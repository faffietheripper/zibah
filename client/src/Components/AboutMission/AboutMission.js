import React from "react";

export default function AboutMission() {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <img
          alt="Violin"
          src="https://media.istockphoto.com/id/1333405308/photo/positive-woman-video-calling-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=0uH6FbjIvWaxW-tdCZltqbGBlAZuQnVlgr6joXsJxUc="
          className="h-full w-full object-cover sm:h-[calc(100%)] sm:self-end ltr:sm:rounded-tl-[30px] rtl:sm:rounded-tr-[30px] md:h-[calc(100%)] ltr:md:rounded-tl-[60px] rtl:md:rounded-tr-[60px]"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Mission</h2>

            <p className=" text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu
              enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
