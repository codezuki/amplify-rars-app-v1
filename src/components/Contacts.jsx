import {
  Setting2,
  Edit2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const Contacts = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <h1 className="text-xl font-normal text-gray-700">
        Contacts
      </h1>

      {/* Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Top section */}
        <div className="flex justify-between items-start mb-6">

          {/* Filters */}
          <div>
            <select className="border px-4 py-2">
              <option>Add filters</option>
            </select>

            <div className="mt-3">
              <span className="inline-block bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                STATUS<br />Active
              </span>
            </div>
          </div>

          {/* New Contact */}
          <button className="bg-[#0a6fb6] text-white px-5 py-2">
            NEW CONTACT
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
            <tr className="bg-gray-200 text-left text-sm text-gray-700">
              <th className="px-4 py-2">CODE</th>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">CITY/MUNICIPALITY</th>
              <th className="px-4 py-2">STATUS</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {[
              {
                code: 'TTT08GB0045k',
                name: 'mnk chemicals',
                city: '',
                status: 'Active',
              },
              {
                code: 'SOSPL',
                name: 'Sanjay Oil Supplier PVT LTD',
                city: 'Chennai',
                status: 'Active',
              },
              {
                code: 'Test Contact',
                name: 'test contact',
                city: '',
                status: 'Active',
              },
            ].map((row, i) => (
              <tr key={i} className="border-b last:border-b-0">
                <td className="px-4 py-2">{row.code}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.city}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2 text-right cursor-pointer text-[#0a6fb6]">
                  <Edit2 size="18" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-600">
          <span>1–3 / 3</span>

          <button className="p-2 bg-gray-200 rounded">
            <ArrowLeft2 size="18" />
          </button>

          <button className="px-3 py-1 bg-[#0a6fb6] text-white rounded">
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

export default Contacts
