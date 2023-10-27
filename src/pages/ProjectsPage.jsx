import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function ProjectsPage() {
  return (
    <>
      <div className="container mx-auto divide-y">
        <div className="text-center text-6xl md:text-8xl my-20 text-white">
          <h1>Projects</h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-20">
          <Link
            to={"/loginexample"}
            className="border rounded-xl max-w-lg divide-y hover:bg-maincolor-200"
          >
            <h1 className="text-white text-center py-5">Login page</h1>
            <div className="text-white text-center pt-20">
              <p className="pb-28">Login page</p>
              <div className="flex flex-col items-center py-2">
                <button className="text-white border rounded-md p-3">Login page</button>
              </div>
            </div>
          </Link>
        </section>
      </div>

      <Footer />
    </>
  )
}
