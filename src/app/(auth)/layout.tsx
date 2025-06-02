import React from 'react'

function AuthLayout({children}: {children : React.ReactNode}) {
  return (
    <div className='bg-black'>
        {children}
    </div>
  )
}

export default AuthLayout