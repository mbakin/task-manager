export default function InProgress() {

  return(
    <div className="flex flex-col w-80 bg-transparent rounded-lg">
          <h3 className="px-3 pt-1 pb-1 text-lg font-bold text-gray-500 leading-tight font-mono">
            In Progress
          </h3>
          <div className="flex-1 min-h-0">
            <ul className="pt-1 pb-3 px-3">
              <li className="mt-1">
                <a
                  href="#"
                  className="block bg-white p-5 rounded-lg shadow-lg "
                >
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div className="px-3 py-1 bg-blue-200 rounded">
                        <span className="text-sm font-medium text-blue-500 leading-tight uppercase">
                          Design
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                          className="b-4 h-4"
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
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        <span className="ml-2">2</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-600 text-sm">Product illustration to symbolize bringing people together</p>
                    </div>
                    <div className="mt-3  ml-3 flex items-center">
                      <span className="-ml-2.5 border-2 border-white rounded-full">
                        <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&h=100&w=100&q=80" alt="avatar" />
                      </span>
                      <span className="-ml-2.5 border-2 border-white rounded-full">
                        <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&w=100&h=100&q=80" alt="avatar" />
                      </span>
                      <span className="-ml-2.5 border-2 border-white rounded-full">
                        <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&w=100&h=100&q=80" alt="avatar" />
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
  
}