import React from "react";

export default function Compined() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-10/12 lg:w-8/12 my-10">
                {/* Card 1 */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Are You Looking For a Car ?</h2>
                        <p className="text-gray-600 mb-4">
                            We are committed to providing our customers with exceptional service.
                        </p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                            Get Started →
                        </button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
                            alt="car"
                            className="w-14 h-14"
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-pink-100 p-6 rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Do You Want to Sell a Car ?</h2>
                        <p className="text-gray-600 mb-4">
                            We are committed to providing our customers with exceptional service.
                        </p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                            Get Started →
                        </button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                            alt="sell car"
                            className="w-14 h-14"
                        />
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px]">
                <iframe
                    title="location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.301603009706!2d31.142144775494184!3d30.20918987484425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145869a4f7d670cd%3A0x89a7f2ca9a7ad5d8!2z2KfZhNi52YTZiSDYqNmE2KfYsdmK2Kk!5e0!3m2!1sen!2seg!4v1731342598895!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
