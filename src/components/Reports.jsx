import {
  Setting2,
  Printer,
  Import,
} from 'iconsax-reactjs'

const Reports = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <h1 className="text-xl font-normal text-gray-700">
        Reports
      </h1>

      {/* ================= MAIN CARD ================= */}
      <div className="bg-white rounded shadow p-6 space-y-6">

        {/* Report Type */}
        <div>
          <select className="w-full border px-4 py-3 text-lg font-semibold">
            <option>Weighing reporting</option>
          </select>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-3 gap-6">

          {/* Filtering */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Filtering
            </label>
            <select className="w-full border px-3 py-2">
              <option>Add filters</option>
            </select>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                INTERVAL<br />08.01.2026 - 08.01.2026
              </span>
              <span className="bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                UNIT<br />kg
              </span>
              <span className="bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                LOCATION<br />WOODLEIGH WATERWORKS (001)
              </span>
              <span className="bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                TRANSACTION TYPE<br />Incoming cargo
              </span>
              <span className="bg-[#0a6fb6] text-white px-3 py-1 text-sm rounded">
                TRANSACTION TYPE<br />Outgoing cargo
              </span>
            </div>

            <p className="text-sm text-blue-600 mt-3 cursor-pointer">
              SAVED VIEWS
            </p>
          </div>

          {/* Group by */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Group by
            </label>
            <select className="w-full border px-3 py-2">
              <option>Add grouping</option>
            </select>
          </div>

          {/* Additional attributes */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Additional attributes
            </label>
            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              Kilos (kg)
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4">

          <button className="bg-[#0a6fb6] text-white px-10 py-2">
            SEARCH
          </button>

          <div className="flex gap-3">
            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              <Setting2 size="18" />
            </button>
            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              <Printer size="18" />
            </button>
            <button className="bg-[#0a6fb6] text-white px-4 py-2">
              <Import size="18" />
            </button>
          </div>
        </div>

        {/* Results Placeholder */}
        <div className="border-t pt-10 text-center text-gray-500">
          Press the "Search" button to retrieve the data of the loads
        </div>
      </div>
    </div>
  )
}

export default Reports
