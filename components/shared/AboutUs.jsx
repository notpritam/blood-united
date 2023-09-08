const AboutUs = () => {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap p-12 items-center justify-between mx-4">
            <div className="w-full px-4  lg:w-6/12">
              <div className="flex items-center  -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/07/21/19/41/blood-5427228_1280.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1582719202047-76d3432ee323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Donate Blood
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Be the Lifeline: Donate Blood, Save Lives.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Be a lifeline. Donate blood. Save lives. Your simple act of
                  generosity can bring light to someone's darkest moments. Join
                  the movement today!
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
