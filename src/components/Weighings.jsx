import {
  CloseCircle,
  Add,
  Import,
  Setting2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const Weighings = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Material transactions
      </h1>

      {/* Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Top filters */}
        <div className="flex justify-between items-start mb-6">

          <div>
            <select className="border px-4 py-2">
              <option>Add filters</option>
            </select>

            <div className="flex gap-3 mt-3">
              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded">
                INTERVAL<br />08.01.2026 - 08.01.2026
              </span>

              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded flex items-center gap-2">
                LOCATION<br />WOODLEIGH WATERWORKS
                <CloseCircle size="16" className="cursor-pointer" />
              </span>
            </div>

            <div className="text-[#0a6fb6] text-sm mt-4 font-medium">
              SAVED VIEWS
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              <Add size="20" />
            </button>

            <button className="bg-[#0a6fb6] text-white px-5 py-2">
              ADD TRANSACTION
            </button>

            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              <Import size="18" />
            </button>
          </div>
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
              <th className="px-4 py-2">
                <span className="bg-[#0a6fb6] text-white px-3 py-1 rounded">
                  Receipt number
                </span>
              </th>
              <th className="px-4 py-2">Vehicle</th>
              <th className="px-4 py-2">Weighing info</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="6"
                className="text-center text-gray-500 py-12"
              >
                No weighings
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-600">
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

export default Weighings
