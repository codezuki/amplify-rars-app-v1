import {
  Refresh,
  Share,
  Setting2,
  InfoCircle,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-reactjs'

const Assets = () => {
  return (
    <div className="space-y-6">

      {/* Page title */}
      <h1 className="text-xl font-normal text-gray-700">
        Assets
      </h1>

      {/* Main card */}
      <div className="bg-white rounded shadow p-6">

        {/* Filters + actions */}
        <div className="flex justify-between items-start mb-6">

          <div className="space-y-4">
            <select className="border px-4 py-2 w-56">
              <option>Add filters</option>
            </select>

            <div className="inline-flex items-center gap-3 bg-[#0a6fb6] text-white px-4 py-2 text-sm rounded">
              <div>
                TYPE<br />
                Weighing instrument
              </div>
              <span className="cursor-pointer font-bold">×</span>
            </div>

            <div className="text-[#0a6fb6] text-sm font-semibold">
              SAVED VIEWS
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="bg-[#0a6fb6] p-2 rounded">
                <Refresh size="18" color="#ffffff" />
              </div>
              Statuses updated at 08.01.2026 10.57.51
            </div>
          </div>

          <button className="bg-[#0a6fb6] text-white px-5 py-2">
            NEW ASSET
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
              <th className="px-4 py-2 text-left">HEALTH</th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">LOCATION</th>
              <th className="px-4 py-2 text-left">TYPE</th>
              <th className="px-4 py-2 text-left">SHARED</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3">
                <InfoCircle size="20" color="#22c55e" variant="Bold" />
              </td>
              <td className="px-4 py-3">
                Single weighing Double bridge
              </td>
              <td className="px-4 py-3">
                WOODLEIGH WATERWORKS (001)
              </td>
              <td className="px-4 py-3">
                Weighing instrument
              </td>
              <td className="px-4 py-3">
                <Share size="20" className="cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          <button className="p-2 bg-gray-200 rounded">
            <ArrowLeft2 size="18" />
          </button>

          <button className="px-4 py-2 bg-[#0a6fb6] text-white rounded">
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

export default Assets
