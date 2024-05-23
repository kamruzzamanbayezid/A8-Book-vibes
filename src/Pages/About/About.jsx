
const About = () => {
      return (
            <div className="">
                  <div className=" flex flex-col lg:flex-row gap-6 lg:gap-0 items-center text-center lg:text-start mt-10">
                        <div className="lg:w-[60%]">
                              <h1 className="font-playfair text-5xl font-bold mb-5">About US!</h1>
                              <p className="text-[#131313b3] font-normal text-base lg:w-[90%]">
                                    Welcome to our Book Review and Reading List application! We are passionate about literature and aim to provide a platform where book enthusiasts can explore, review, and track their reading journey.
                              </p>
                        </div>
                        <div className="lg:w-[40%]">
                              <img src="https://i.ibb.co/nMqgdkR/98.jpg" alt="" />
                        </div>
                  </div>

                  <div className=" flex flex-col lg:flex-row-reverse gap-6 lg:gap-0 items-center text-center lg:text-start justify-between my-16">
                        <div className="lg:w-[58%]">
                              <h1 className="font-playfair text-5xl font-bold mb-5">Our Mission!</h1>
                              <p className="text-[#131313b3] font-normal text-base lg:w-[90%]">
                                    Our mission is to create a comprehensive and user-friendly platform for book lovers. We strive to provide detailed information and honest reviews of various books, helping readers make informed decisions about their next read. We also offer features to track and visualize your reading list, making your reading experience more engaging and organized.
                              </p>
                        </div>
                        <div className="lg:w-[38%]">
                              <img src="https://i.ibb.co/zRSRJQ1/511.jpg" alt="" />
                        </div>
                  </div>

                  <div className=" flex flex-col lg:flex-row gap-6 lg:gap-0 items-center text-center lg:text-start justify-between my-16">
                        <div className="lg:w-[60%]">
                              <h1 className="font-playfair text-5xl font-bold mb-5">What We Offer!</h1>
                              <ul className="list-disc pl-6 mb-4 text-[#131313b3] font-normal text-base">
                                    <li>Detailed reviews and information on a wide range of books.</li>
                                    <li>A feature to add books to your read list.</li>
                                    <li>Data visualization tools to track your reading progress.</li>
                              </ul>
                        </div>
                        <div className="lg:w-[40%]">
                              <img src="https://i.ibb.co/rHnNHXz/2148883765.jpg" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default About;