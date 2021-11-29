export default function Home() {
  return (
    <div className="h-screen flex">
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

      <div className="flex-1 min-w-0">
        <header className="flex flex-col border-b border-gray-200 px-8 py-4">
          <div>
            <div className="relative w-64 ml-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input className="block w-full text-sm border border-gray-300 rounded-md py-2 pl-10 pr-4 placeholder-gray-400" type="text" placeholder="Search" />
            </div>
          </div>
          <div>Header Bottom</div>
        </header>
        <div>Tasks</div>
      </div>
    </div>
  );
}
