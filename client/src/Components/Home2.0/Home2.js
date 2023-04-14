import React from "react";
import HomeVideo from "../../Images/woman-79395.mp4";

export default function Home2() {
  return (
    <div>
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">Welcome to my site!</div>
        <section class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
              <source src={HomeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </header>
    </div>
  );
}
