export default function Siderbar() {
  return (
    <div className="bg-white w-64 px-8 py-10 border-r border-blue-500 border-opacity-25 rounded-lg">
        <div>
          <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        </div>
        <nav className="mt-8">
          <h3 className="text-md font-semibold text-gray-500 uppercase tracking-wide">
            Scrumboard
          </h3>
          <div className="mt-2 -mx-4">
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">17</span>
            </a>
            <a
              href="#"
              className="flex justify-between bg-gradient-to-r from-purple-800 to-blue-500 rounded-lg items-center px-4 py-2 "
            >
              <span className="text-sm font-medium text-white">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">11</span>
            </a>
          </div>

          <h3 className="text-md mt-8 font-semibold text-gray-500 uppercase tracking-wide">
            Tags
          </h3>
          <div className="mt-2 -mx-4">
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-4 py-2 "
            >
              <span className="text-sm font-medium text-gray-700">
                New Feature
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">
                Marketing
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">
                Research
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>
  )
}