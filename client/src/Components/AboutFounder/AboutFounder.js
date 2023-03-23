import React from "react";

export default function AboutFounder() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Meet Our Founder - Ruth</h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu
              enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <button
                className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                View Ruth's Portfolio
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Ruth's Portfolio</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto h-[60vh] overflow-scroll">
                          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                              alt="Office"
                              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                              className="h-56 w-full object-cover"
                            />

                            <div className="bg-white p-4 sm:p-6">
                              <time datetime="2022-10-10" className="block text-xs text-gray-500">
                                10th Oct 2022
                              </time>

                              <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                              </a>

                              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus
                                nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque
                                explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                              </p>
                            </div>
                          </article>
                          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                              alt="Office"
                              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                              className="h-56 w-full object-cover"
                            />

                            <div className="bg-white p-4 sm:p-6">
                              <time datetime="2022-10-10" className="block text-xs text-gray-500">
                                10th Oct 2022
                              </time>

                              <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                              </a>

                              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus
                                nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque
                                explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                              </p>
                            </div>
                          </article>
                          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                              alt="Office"
                              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                              className="h-56 w-full object-cover"
                            />

                            <div className="bg-white p-4 sm:p-6">
                              <time datetime="2022-10-10" className="block text-xs text-gray-500">
                                10th Oct 2022
                              </time>

                              <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                              </a>

                              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus
                                nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque
                                explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://lh3.googleusercontent.com/81XT0zcgx_y-nk8V_06wK3-6rfIAdWlIlTP2LxItczJIZbZiSBidZVaR7WbMA5dQ_50XTTh2HeUO12HWm3lyrGKss-rHbGhWgD3UZeJnF_ze-uvqnw8vlDey5gGtTz77pSbfxbhCZNyo37hLAza_EKAAkeWwNvAp3WLTi27L4wtFqxP2wHM4ejMp4HIrNWcn1uHT4WU8SIs5Dji40PitRD4fq9VWOBNpQsKdgfy1WZnQj2wkLgShdUTPRjQ1eLY5qkQcOeqtFptlb2L2AjlZQ213SEXJsHpU44M-aixhXNlgTA4rasZ3c0lKZDS8C0KNS4BdxP3f57v_1QR-JlSwmOQMu4Gk27Cc_u0acz_Q0tVeBbqXqyn0cDD7FIw6qSvc1bpu6yA7jkq6BQFeOX0KwtlPM7L9inMGRL7lkik6qvseBt2-C9WpeUGuuKU3b3u8StIMMGjQyGRRCRmUC_ch4CjAe9jBmf872hpNsfVpZqZda4du0BBbg85Ej3N975JHDScsK-Gkem68qLKWVy2yxpIfcKEPXMHVmUcN_u7x3cxlHajhJRLlQLHRATUPvcFvlcctPRrEqSi7VcIDJG60M94q3Fr0IFed81AyCefZNwXjjq2fj43JQHZ3Lx9I8Na0LLxi6VwogbmJvanz2x6mXgimXkxkPQZPmyuJf3pwHo9lCJx7G3tGC17jWucs95z7xgHxNhGyvjN_RUkOtTw6lkVFMrwPu5-jXSeSw4cJuN4GbPxZu6Q6hUGLTy4DGY0uw1caZzNEUaig6cCj6bcRR6GKixKY3BD8VVTWbiOpycfIufih1dMC00roHmPhgbOrWZ2VqZChTIa0DLWlDJXM4T4niEpc16jWOgHTb3bMNf73yZuB7Mpm5YSZLUfxKp69exMo9U48GyW-rPwO7htMTHlmvjvcxex9AvGM8gfkjlmQ=w800-h612-s-no?authuser=0"
          className="h-70 w-full object-cover sm:h-full "
        />
      </section>
    </div>
  );
}
