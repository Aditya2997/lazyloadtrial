import React, { useState } from 'react'
import { render } from 'react-dom'
import loadable from '@loadable/component'

const Hello = loadable(() => import('./Hello'))
const Dynamic = loadable(p => import(`./${p.name}`), {
  cacheKey: p => p.name,
})

function App() {
  const [name, setName] = useState(null)

  return (
    <div>
      <button type="button" onClick={() => setName('A')}>
        Go to A
      </button>
      <button type="button" onClick={() => setName('B')}>
        Go to B
      </button>
      {name && <Dynamic name={name} />}
      <Hello />
    </div>
  )
}

const root = document.createElement('div')
document.body.append(root)

render(<App />, root)
