import {
  Setting2,
  Edit2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const Products = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Products
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
            NEW PRODUCT
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
              <th className="px-4 py-2 text-left">PRODUCT CODE</th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">UNIT OF MEASUREMENT</th>
              <th className="px-4 py-2 text-left">STATUS</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {[
              { code: 'test', name: 'chemical', unit: 'kg' },
              { code: 'test1', name: 'chemical', unit: 'kg' },
              { code: 'SH', name: 'Sodium Hypochlorite', unit: 'kg' },
              { code: 'string', name: 'string', unit: 'kg' },
            ].map((item, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-3">{item.code}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.unit}</td>
                <td className="px-4 py-3">Active</td>
                <td className="px-4 py-3 text-right cursor-pointer text-[#0a6fb6]">
                  <Edit2 size="18" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col items-center mt-6 gap-2 text-sm text-gray-600">
          <span>1–4 / 4</span>

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

export default Products
