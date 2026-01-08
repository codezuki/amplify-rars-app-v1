import {
  Setting2,
  Edit2,
  CloseCircle,
} from 'iconsax-reactjs'

const Orders = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Orders
      </h1>

      {/* Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Filters row */}
        <div className="flex justify-between items-start mb-6">

          <div className="space-y-3">
            <div className="flex gap-8">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Filtering
                </label>
                <select className="border px-4 py-2 w-56">
                  <option>Add filters</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Orders display
                </label>
                <select className="border px-4 py-2 w-56">
                  <option>Orders</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded">
                STATUS<br />Active
              </span>

              <span className="bg-[#0a6fb6] text-white px-3 py-2 text-sm rounded flex items-center gap-2">
                LOCATION<br />WOODLEIGH WATERWORKS
                <CloseCircle size="16" className="cursor-pointer" />
              </span>
            </div>

            <div className="text-[#0a6fb6] text-sm font-medium">
              SAVED VIEWS
            </div>
          </div>

          {/* New order button */}
          <button className="bg-[#0a6fb6] text-white px-5 py-2 h-fit">
            NEW ORDER
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
              <th className="px-4 py-2 text-left">ORDER</th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">CONTACT DETAILS</th>
              <th className="px-4 py-2 text-left">PRODUCT</th>
              <th className="px-4 py-2 text-left">ORDERED</th>
              <th className="px-4 py-2 text-left">STATUS</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">

            <tr className="border-b">
              <td className="px-4 py-4">
                <span className="bg-[#0a6fb6] text-white px-6 py-2 rounded">
                  1
                </span>
              </td>
              <td className="px-4 py-4">TESTING ORder</td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4">Sodium Hypochlorite (SH)</td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4">Not delivered</td>
              <td className="px-4 py-4 text-[#0a6fb6] cursor-pointer">
                <Edit2 size="18" />
              </td>
            </tr>

            <tr className="border-b bg-gray-50">
              <td className="px-4 py-4">
                <span className="bg-[#0a6fb6] text-white px-4 py-2 rounded">
                  mnk chemicals
                </span>
              </td>
              <td className="px-4 py-4">mnk chemicals</td>
              <td className="px-4 py-4">
                vihe<br />
                dislery street, kochi<br />
                680671<br />
                kochi<br />
                india
              </td>
              <td className="px-4 py-4">No product</td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4">Not delivered</td>
              <td className="px-4 py-4 text-[#0a6fb6] cursor-pointer">
                <Edit2 size="18" />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-4">
                <span className="bg-[#0a6fb6] text-white px-6 py-2 rounded">
                  PO_100
                </span>
              </td>
              <td className="px-4 py-4">PO_100</td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4">No product</td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4">
                Incomplete (18 600)
              </td>
              <td className="px-4 py-4 text-[#0a6fb6] cursor-pointer">
                <Edit2 size="18" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
