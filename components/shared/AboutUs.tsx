import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="b text-white mt-[10rem]">
      <div className="container flex">
        <div className="flex gap-4 flex-1">
          <div className="flex gap-4 flex-1 flex-col">
            <div className="w-full h-full overflow-hidden">
              <Image
                src="/assets/img/second.jpg"
                height={300}
                width={300}
                alt="Image"
                className="w-full object-cover h-full"
              />
            </div>

            <div className="w-full h-full overflow-hidden">
              <Image
                height={300}
                width={300}
                src="/assets/img/blood.avif"
                alt="Image"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="h-[600px]  flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1582719202047-76d3432ee323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full flex-1 flex p-8 pt-[4rem]">
          <div className="">
            <span className="block mb-2 text-lg font-semibold text-primary">
              Why Donate Blood
            </span>
            <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
              Be the Lifeline: Donate Blood, Save Lives.
            </h2>
            <p className="mb-8 text-base text-body-color">
              Be a lifeline. Donate blood. Save lives. Your simple act of
              generosity can bring light to someone's darkest moments. Join the
              movement today!
            </p>
            <a
              href="/#"
              className="inline-flex bg-white text-black items-center justify-center px-10 py-4 text-base font-normal text-center rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
