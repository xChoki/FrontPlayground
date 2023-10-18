import bg_img from "../assets/bg_img.jpg"
import img_1 from "../assets/img_1.jpg"

export default function IndexPage() {
  return (
    <>
      <section className="bg-maincolor">
        <div className="relative h-1/2">
          <img src={bg_img} className="w-full h-full object-cover object-center" alt="Background" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur-sm p-2 md:p-5">
            <h1 className="lg:text-8xl text-white" style={{ textShadow: "#161523 1px 0 10px" }}>
              Welcome!
            </h1>
            <p className="lg:text-xl text-gray-100" style={{ textShadow: "#161523 1px 0 10px" }}>
              This is just a frontend showcase.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full lg:max-w-1/2 lg:flex p-20 mx-auto bg-maincolor justify-center">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: "url(" + img_1 + ")" }}
          title="Image 1"
        ></div>

        <div className="border-r border-b border-l border-[#40396f] lg:border-l-0 lg:border-t lg:border-[#40396f] bg-[#2a2649] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-white font-bold text-xl mb-2">
              What is the porpose of this project?
            </div>
            <p className="text-white text-base mb-3">
              This is just a small playground for me to experiment with different css styles.
            </p>
            <p className="text-white text-base mb-3">
              I&apos;m currently working on this project with ReactJS + Vite and for styling I use
              Tailwind with some custom configurations.
            </p>
            <p className="text-white text-base">
              This site is not really optimized to work on every browser, screen size or zoom, any 16:9 (9:16 for phones) or similar aspect ratio should work.
            </p>
          </div>
          <div className="flex items-center">
            {/* <img
              className="w-10 h-10 rounded-full mr-4"
              src={img_1}
              alt="Avatar of Jonathan Reinink"
            /> */}
            <div className="text-sm">
              <p className="text-white leading-none">Javier Quinteros</p>
              <p className="text-white">Aug 18</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
