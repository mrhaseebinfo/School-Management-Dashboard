
const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs  text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white text-xs text-gray-400 rounded-md px-1 py-1">2024-04-10</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus a ab quae, facilis aliquam minima et libero amet vel! Laborum!</p>
        </div>

        <div className="bg-lamaPurple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white text-xs text-gray-400 rounded-md px-1 py-1">2024-04-10</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus a ab quae, facilis aliquam minima et libero amet vel! Laborum!</p>
        </div>

        <div className="bg-lamaYellow rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white text-xs text-gray-400 rounded-md px-1 py-1">2024-04-10</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus a ab quae, facilis aliquam minima et libero amet vel! Laborum!</p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
