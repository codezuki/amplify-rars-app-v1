import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  Setting2,
  ProfileCircle,
  Global,
  Key,
  ShieldSecurity,
  Logout,
  ArrowDown2,
  ArrowUp2,
} from 'iconsax-reactjs'

const Layout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 bg-[#0a6fb6] flex items-center justify-between px-4 text-white">
        <div className="font-semibold">
          DEMO <span className="font-bold">RARS</span>
        </div>

        <ProfileDropdown onLogout={handleLogout} />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-50 border-r">
          <div className="p-4 font-semibold">DEMO Utilities Board</div>
          <ul className="text-sm">
  <li
    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
    onClick={() => navigate('/dashboard/operator-weighing')}
  >
    Operator weighing
  </li>

  <li
    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
    onClick={() => navigate('/dashboard/reports')}
  >
    Reports
  </li>

  <li
    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
    onClick={() => navigate('/dashboard/companies')}
  >
    Companies
  </li>

  <li
    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
    onClick={() => navigate('/dashboard/contacts')}
  >
    Contacts
  </li>

  <li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/weighings')}
>
  Weighings
</li>

<li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/orders')}
>
  Orders
</li>

<li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/weighing-codes')}
>
  Weighing codes
</li>
<li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/products')}
>
  Products
</li>
<li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/transport-units')}
>
  Transport units
</li>
<li
  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
  onClick={() => navigate('/dashboard/assets')}
>
  Assets
</li>
  {[
  ].map((item) => (
    <li
      key={item}
      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
    >
      {item}
    </li>
  ))}
</ul>


        </aside>

        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

const ProfileDropdown = ({ onLogout }) => {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('English')

  const languages = ['Suomi', 'English', 'Dansk', 'Deutsch']

  return (
    <div className="relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => {
          setOpen(!open)
          setLangOpen(false)
        }}
      >
        <ProfileCircle size="22" color="#ffffff" />
        <ArrowDown2 size="14" color="#ffffff" />
      </div>

      {open && (
        <div className="absolute right-0 top-10 w-64 bg-white shadow-lg border">
          <ul className="text-sm text-black">
            <li
              className="flex justify-between px-4 py-3 bg-gray-100 cursor-pointer"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>{language}</span>
              {langOpen ? <ArrowUp2 size="14" /> : <ArrowDown2 size="14" />}
            </li>

            {langOpen &&
              languages
                .filter((l) => l !== language)
                .map((l) => (
                  <li
                    key={l}
                    className="px-8 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLanguage(l)
                      setLangOpen(false)
                    }}
                  >
                    {l}
                  </li>
                ))}

            {!langOpen && (
              <>
                <li className="px-4 py-3 flex gap-2 text-black hover:bg-gray-100 cursor-pointer">
                  <Key size="18" /> Change password
                </li>
                <li className="px-4 py-3 flex gap-2 text-black hover:bg-gray-100 cursor-pointer">
                  <ShieldSecurity size="18" /> 2-step authentication
                </li>
                <li
                  className="px-4 py-3 flex gap-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  onClick={onLogout}
                >
                  <Logout size="18" /> Logout
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
