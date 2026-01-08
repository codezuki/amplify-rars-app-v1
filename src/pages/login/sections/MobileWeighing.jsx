import { useNavigate } from 'react-router-dom'
import {
  ArrowDown2,
  Edit,
  Weight,
  Ticket,
} from 'iconsax-reactjs'

const MobileWeighing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2 font-semibold text-blue-600">
            <span className="text-lg">RARS</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="border px-2 py-1 text-sm rounded">EN</div>
            <div className="border px-3 py-1 text-sm rounded">
              INSTRUCTIONS
            </div>
            <div className="border px-2 py-1 rounded">☰</div>
          </div>
        </div>

        {/* ================= START ================= */}
        <div className="bg-[#0a6fb6] text-white text-center py-4 text-xl font-semibold">
          START
        </div>

        {/* ================= WEIGHING CODE ================= */}
        <div className="p-6 border-b">
          <label className="block text-sm text-gray-600 mb-2">
            Enter weighing code
          </label>

          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="text"
              className="flex-1 px-4 py-3 outline-none"
            />
            <div className="px-4 border-l">
              <ArrowDown2 size="20" />
            </div>
          </div>
        </div>

        {/* ================= VEHICLE INFO ================= */}
        <div className="bg-[#0a6fb6] text-white text-center py-3 font-semibold">
          VEHICLE INFO
        </div>

        <div className="p-6 grid grid-cols-2 gap-6">
          {/* Register number */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Register number
            </label>

            <div className="border rounded px-4 py-3 flex items-center justify-center">
              <Edit size="22" color="#0a6fb6" />
            </div>
          </div>

          {/* Vehicle type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Vehicle type <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center border rounded px-4 py-3 justify-between">
              <span className="text-gray-400">Select</span>
              <ArrowDown2 size="18" />
            </div>
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <div className="bg-[#0a6fb6] text-white rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-700">
            <Weight size="36" variant="Bold" />
            <span className="font-semibold">WEIGHING</span>
          </div>

          <div className="bg-[#0a6fb6] text-white rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-700">
            <Ticket size="36" variant="Bold" />
            <span className="font-semibold">TICKETS</span>
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div className="px-6 pb-6">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default MobileWeighing
