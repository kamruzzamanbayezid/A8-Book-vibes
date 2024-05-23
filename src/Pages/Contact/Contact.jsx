
const Contact = () => {
      return (
            <div className="dark:bg-gray-100 dark:text-gray-900 mb-20">

                  <div className=" flex flex-col lg:flex-row gap-6 lg:gap-0 items-center text-center lg:text-start my-10">
                        <div className="lg:w-[60%]">
                              <h1 className="font-playfair text-5xl font-bold mb-5">Contact Us</h1>
                              <p className="text-[#131313b3] font-normal text-base lg:w-[90%]">We would love to hear from you! Please reach out to us using the information below, or fill out our contact form to send us a message directly.</p>
                        </div>
                        <div className="lg:w-[40%]">
                              <img src="https://i.ibb.co/ZzPQnD2/2149139106.jpg" alt="" />
                        </div>
                  </div>


                  <section className="py-10 dark:bg-gray-100 bg-[#1313130d] dark:text-gray-900 rounded-2xl">
                        <div className="grid grid-cols-1 px-6  lg:px-8 md:grid-cols-2 ">
                              <div className="py-6 md:py-0 md:px-6">
                                    <h1 className="font-playfair text-5xl font-bold mb-5">Get In Touch</h1>
                                    <p className="text-[#131313b3] font-normal text-lg pt-2 pb-4">Fill in the form to start a conversation</p>
                                    <div className="space-y-4">
                                          <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="w-5 h-5 mr-2 sm:mr-6">
                                                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-[#131313b3] font-normal text-base">Matlab North,<br /> Chandpur 3640</span>
                                          </p>
                                          <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="w-5 h-5 mr-2 sm:mr-6">
                                                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>
                                                <span className="text-[#131313b3] font-normal text-base">01882888860</span>
                                          </p>
                                          <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="w-5 h-5 mr-2 sm:mr-6">
                                                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                                <span className="text-[#131313b3] font-normal text-base">kmbayezid955@gmail.com</span>
                                          </p>
                                    </div>
                              </div>
                              <form className="space-y-6">
                                    <div>
                                          <label htmlFor="name" className="text-xl">Full name</label>
                                          <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="text-xl">Email</label>
                                          <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                                    </div>
                                    <div>
                                          <label htmlFor="message" className="text-xl">Message</label>
                                          <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                                    </div>
                                    <button className="w-full text-white hover:text-[#59C6D2] bg-[#59C6D2] hover:bg-transparent px-6 py-3 border border-[#59C6D2] font-semibold text-lg rounded-lg transition">Send Message</button>
                              </form>
                        </div>
                  </section>
            </div>
      );
};

export default Contact;
