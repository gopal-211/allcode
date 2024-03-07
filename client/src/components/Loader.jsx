import React from 'react'


const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src={'https://www.investopedia.com/thmb/FD9Ihg0FrG7y01iaRMFpy73lc6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fund-5bfc3776c9e77c00519dc4c9.jpg'} alt="loader" className="w-[100px] h-[100px] object-contain"/>
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">Transaction is in progress <br /> Please wait...</p>
    </div>
  )
}

export default Loader