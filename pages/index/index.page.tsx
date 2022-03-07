import React, { useState } from 'react'
import MobileNavigation from '../../components/mobilenav'
import { Counter } from './Counter'

export { Page }

function Page() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <MobileNavigation open={open} setOpen={setOpen} />
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <button onClick={() => setOpen(true)}>Open Nav</button>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
