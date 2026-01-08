import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Ticket,
  MessageText,
  VideoPlay,
  Headphone,
  ArrowRight2,
} from 'iconsax-reactjs'
import bgImage from '../../assets/images/BG1.jpg'
import bgImage2 from '../../assets/images/BG2.jpg'

const Login = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSuccessLogin = () => {
    sessionStorage.setItem('authToken', 'dummy-token')
    navigate('/dashboard')
  }

  if (step === 1) {
    return (
      <div
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
>
        <div className="flex items-center justify-between px-10 py-10 text-white ml-80 mr-80 mb-2">
          <div className="flex items-center gap-1 mt-10">
            <span className="font-bold text-lg">DEMO RARS</span>
            <span className="border-l h-6 mx-3"></span>
            <span className="text-sm">
              A new era of weighing data management
            </span>
          </div>
          <div className="bg-white text-[#0a6fb6] mt-10 px-3 py-1 rounded text-sm font-semibold">
            EN
          </div>
        </div>

        <div className="flex justify-center -mt-1">
          <div className="bg-blue-100 w-200 h-110 rounded shadow-lg flex">
            <div className="w-1/2 p-10">
              <h1 className="text-2xl font-semibold mb-6">
                Sign in to DEMO RARS Weighing Service
              </h1>

              <label className="block text-sm mb-1">Username</label>
              <input
                className="w-full border px-3 py-2 mb-6"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button
                className="bg-[#0a6fb6] text-white px-6 py-2 mb-6"
                onClick={() => setStep(2)}
              >
                CONTINUE
              </button>
            </div>

            <div className="w-1/2 h-full border-l">
              {[
                {
                  icon: Ticket,
                  title: 'Go to mobile weighing',
                  desc: 'Mobile weighing is done with the weighing code',
                  action: () => navigate('/mobile-weighing'),
                },
                {
                  icon: MessageText,
                  title: 'Get to know the RARS service',
                  desc: 'Additional information about RARS service',
                  action: () => navigate('/about-service'),
                },
                {
                  icon: VideoPlay,
                  title: 'Weighing service video presentation',
                  desc: 'Easy and fluent weighing',
                  action: () => navigate('/video-presentation'),
                },
                {
                  icon: Headphone,
                  title: 'Contact support',
                  desc: 'Contact us by email support@rars.com',
                  action: () => navigate('/support'),
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    onClick={item.action}
                    className="flex justify-between px-6 py-6 border-b cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex gap-5">
                      <Icon size="32" color="#f97316" variant="Bold" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight2 size="50" color="#f97316" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ======================
     STEP 2 – PASSWORD
  ====================== */
  return (
    <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage2})` }}
>
      <div className="bg-white w-full max-w-sm rounded shadow-lg">
        <div className="bg-[#0a6fb6] text-white text-center py-4 font-bold">
          RARS
        </div>

        <div className="p-6">
          <p className="mb-4 text-sm">
            Sign in with your username and password
          </p>

          <label className="block text-sm mb-1">Username</label>
          <input
            className="w-full border px-3 py-2 mb-3"
            value={username}
            disabled
          />

          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-sm text-blue-600 mb-4 cursor-pointer">
            Forgot your password?
          </p>

          <button
            className="w-full bg-[#0a6fb6] text-white py-2 font-semibold"
            onClick={handleSuccessLogin}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
