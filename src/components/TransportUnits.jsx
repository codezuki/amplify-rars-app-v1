import {
  Setting2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const TransportUnits = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Transport units
      </h1>

      {/* Main card */}
      <div className="bg-white rounded shadow p-6">

        {/* Filters + action */}
        <div className="flex justify-between items-start mb-6">

          <div className="space-y-3">
            <select className="border px-4 py-2 w-56">
              <option>Add filters</option>
            </select>

            <span className="inline-block bg-[#0a6fb6] text-white px-4 py-2 text-sm rounded">
              STATUS<br />Active
            </span>
          </div>

          <button className="bg-[#0a6fb6] text-white px-5 py-2">
            NEW TRANSPORT UNIT
          </button>
        </div>

        {/* Table controls */}
        <div className="flex justify-end items-center gap-4 mb-2 text-sm text-gray-600">
          <select className="border px-3 py-1">
            <option>25</option>
          </select>

          <div className="flex items-center gap-1 cursor-pointer">
            <span>Columns</span>
            <Setting2 size="18" />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-sm text-gray-700">
              <th className="px-4 py-2 text-left">TYPE</th>
              <th className="px-4 py-2 text-left">IDENTIFIER</th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">FIXED TARE</th>
              <th className="px-4 py-2 text-left">STATUS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="5"
                className="px-4 py-6 text-center text-gray-500"
              >
                No vehicles
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col items-center mt-6 gap-2 text-sm text-gray-600">
          <div className="flex gap-4">
            <button className="p-2 bg-gray-200 rounded">
              <ArrowLeft2 size="18" />
            </button>

            <button className="px-4 py-1 bg-[#0a6fb6] text-white rounded">
              1
            </button>

            <button className="p-2 bg-gray-200 rounded">
              <ArrowRight2 size="18" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TransportUnits
