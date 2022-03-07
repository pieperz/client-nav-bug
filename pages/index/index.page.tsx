import React, { useState } from 'react'
import MobileNavigation from '../../components/mobilenav'
import MobileNavigationNoHeadless from '../../components/mobilenav-noheadlessui'
import MobileNavigationNoHeadless2 from '../../components/mobilenav-noheadlessui-2'
import { Counter } from './Counter'

export { Page }

function Page() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  return (
    <>
    <MobileNavigation open={open1} setOpen={setOpen1} />
    <MobileNavigationNoHeadless open={open2} setOpen={setOpen2} />
    <MobileNavigationNoHeadless2 open={open3} setOpen={setOpen3} />
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <button onClick={() => setOpen1(true)}>Open Nav</button>
        <button onClick={() => setOpen2(true)}>Open Nav No headless</button>
        <button onClick={() => setOpen3(true)}>Open Nav No headless - 2</button>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
