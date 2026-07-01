import { useState } from 'react'

const services = ['Design', 'Development', 'Brand Strategy', 'UI/UX', 'Consulting', 'Other']
const budgets = ['Under ₹10k', '₹10k-₹25k', '₹25k-₹50k', '₹50k-₹1L', '₹1L+']

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', details: '' })
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedBudget, setSelectedBudget] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const toggleService = (s) =>
    setSelectedServices(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('access_key', '0e12722e-6946-474b-88ef-ceeaae024014')
    formData.append('services', selectedServices.join(', '))
    formData.append('budget', selectedBudget || 'Not specified')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        event.target.reset()
        setForm({ name: '', email: '', company: '', details: '' })
        setSelectedServices([])
        setSelectedBudget(null)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
      } else {
        console.error('Error:', data)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>

      <div className="w-1/2 bg-[#ffffff] rounded-2xl flex flex-col gap-4 p-8 relative border border-[#e5e5e5]">
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
          <span className="text-[#000000]">Get in </span>
          <span className="text-[#737373]">touch</span>
        </h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">

          <div className="flex gap-4">
            <div className="w-full bg-[#f5f5f5] rounded-2xl p-6 flex flex-col gap-3 min-h-[120px] border border-[#e5e5e5]">
              <label className="text-[#000000] font-bold text-lg">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="bg-transparent text-[#262626] placeholder-[#a3a3a3] text-base outline-none border-none font-medium"
              />
            </div>

            <div className="w-full bg-[#f5f5f5] rounded-2xl p-6 flex flex-col gap-3 min-h-[120px] border border-[#e5e5e5]">
              <label className="text-[#000000] font-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                placeholder="whoislakshyaanyways@gmail.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="bg-transparent text-[#262626] placeholder-[#a3a3a3] text-base outline-none border-none font-medium"
              />
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl p-6 flex flex-col gap-3 min-h-[320px] border border-[#e5e5e5]">
            <label className="text-[#000000] font-bold text-lg">Your Message</label>
            <textarea
              name="message"
              placeholder="Tell me your goals"
              required
              value={form.details}
              onChange={e => setForm({ ...form, details: e.target.value })}
              className="bg-transparent text-[#262626] placeholder-[#a3a3a3] text-base outline-none border-none resize-none flex-1 font-medium"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-3 bg-[#000000] text-[#ffffff] font-bold text-xl px-10 py-4 rounded-full hover:bg-[#171717] transition-all shadow-md"
            >
              <span className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </span>
              Submit
            </button>
          </div>

        </form>
      </div>

      {showToast && (
        <div className="animate-slide-in fixed bottom-5 right-5 z-50 flex items-center gap-4 w-[330px] h-[80px] p-4 bg-white rounded-xl shadow-lg overflow-hidden">
          <svg className="absolute -rotate-90 left-[-31px] top-[32px] w-[80px] fill-[#4777ff3a]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fillOpacity="1"/>
          </svg>

          <div className="flex justify-center items-center w-9 h-9 bg-[#4777ff48] rounded-full ml-2 shrink-0">
            ✅
          </div>

          <div className="flex flex-col justify-center flex-grow">
            <p className="text-[#124fff] font-bold text-base m-0">Message Sent</p>
            <p className="text-neutral-500 text-sm m-0">Thank you for reaching out!</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" className="w-5 h-5 text-neutral-400 cursor-pointer shrink-0" onClick={() => setShowToast(false)}>
            <path fill="currentColor" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" clipRule="evenodd" fillRule="evenodd"/>
          </svg>
        </div>
      )}
    </>
  )
}

export default Contact