import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-maincolor rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="https://github.com/xChoki" className="hover:underline">
            Javier Quinteros
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
