import {
  CloseCircle,
  Setting2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const WeighingCodes = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Weighing codes
      </h1>

      {/* Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Filters & button row */}
        <div className="flex justify-between items-start mb-6">

          <div className="space-y-3">
            <select className="border px-4 py-2 w-56">
              <option>Add filters</option>
            </select>

            <div className="flex gap-3">
              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded flex items-center gap-2">
                STATUS<br />Valid
                <CloseCircle size="16" className="cursor-pointer" />
              </span>

              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded flex items-center gap-2">
                LOCATION<br />WOODLEIGH WATERWORKS
                <CloseCircle size="16" className="cursor-pointer" />
              </span>
            </div>
          </div>

          <button className="bg-[#0a6fb6] text-white px-5 py-2">
            NEW WEIGHING CODE
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
              <th className="px-4 py-2 text-left">WEIGHING CODE</th>
              <th className="px-4 py-2 text-left">ORDER</th>
              <th className="px-4 py-2 text-left">CUSTOMER</th>
              <th className="px-4 py-2 text-left">CARRIER</th>
              <th className="px-4 py-2 text-left">PRODUCT</th>
              <th className="px-4 py-2 text-left">STATUS</th>
              <th className="px-4 py-2 text-left">START TIME</th>
              <th className="px-4 py-2 text-left">EXPIRATION TIME</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="8"
                className="px-4 py-10 text-center text-gray-500"
              >
                No weighing codes
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
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
  )
}

export default WeighingCodes
