export default function Header() {
  return (
    <div className="flex-1 min-w-0">
    <header className="flex flex-col border-b border-gray-200 px-8">
      <div className="flex justify-between items-center py-4">
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
          <input
            className="block w-full text-sm border border-gray-300 rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <button className="w-6 h-6 text-gray-500">
            <svg
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="ml-6">
            <img src="/images/user.jpg" alt="user" className="w-9 h-9 rounded-full object-cover" />
          </button>
        </div>
      </div>
      <div className="flex items-start py-2">
        <div className="bg-gray-800 text-white text-sm rounded-md font-extrabold px-4 pl-4 pr-4 pt-1 pb-1 mx-3 hover:bg-green-400 duration-500">
          <button>
            Complete Sprint
          </button>
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-indigo-800 text-white text-sm rounded-md font-extrabold px-4 pl-4 pr-4 pt-1 pb-1 mx-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-700 duration-700">
          <button>
            New Item
          </button>
        </div>
      </div>
    </header>
  </div>
  )
}