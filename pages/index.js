
export default function Home() {
  return (
    <div className="h-screen flex">
        <div className="bg-white w-64 px-8 py-10 border-r border-blue-500 border-opacity-25 rounded-lg">
          <div>
            <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
          </div>
          <nav className="mt-8">
            <h3 className="text-md font-semibold text-gray-700 uppercase tracking-wide">Scrumboard</h3>
            <div className="mt-2 -mx-4">
              <a href="#" className="flex justify-between items-center px-4 py-2">
                <span className="text-sm font-medium text-gray-500">Backlog</span>
                <span className="text-sm font-medium text-gray-500">17</span>
              </a>
            </div>
          </nav>
        </div>


        <div className="flex-1 min-w-0">Main Content</div>
    </div>
  )
}
