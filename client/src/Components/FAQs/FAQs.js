import React from "react";

export default function FAQs() {
  return (
    <div className="lg:my-8 my-4 mb-28 lg:mb-32">
      <div className="space-y-4 mx-8">
        <h2 className="text-2xl font-bold text-teal-900 md:text-3xl text-center">Frequently Asked Questions</h2>

        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-teal-900">
            <h2 className="font-medium text-gray-900">What is the shipping policy? </h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            We offer free shipping on all purchases done locally and meet the international client halfway on the shipping charges.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-teal-900">
            <h2 className="font-medium text-gray-900">Can I return an item if I change my mind?</h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            We believe we offer the best service from our hearts to our customers at Zibah Creations. If for any reason you are not satisfied, you can
            return an item to us within 14 days at your expense and we will offer a refund as long as any item being returned is unused and in perfect
            condition. Prior to returning any item you must first send us a WhatsApp @ +263777802867 to inform us of your wish to return an item.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-teal-900">
            <h2 className="font-medium text-gray-900">How long does it take to deliver a product?</h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            It depends on the product and the country to which it is required. Local clients (in Zimbabwe) will get their products within 7 working
            days. Delivery for international client's varies from about 3 weeks to 4 from the date of order and payment.
          </p>
        </details>
      </div>
    </div>
  );
}
