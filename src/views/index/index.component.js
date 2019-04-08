import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Index = () => (
  <div className="Index">
    <h1>Sketch your app !</h1>
    <button>
      <Link to="/whisper">Send a secret</Link>
    </button>
    <button>
      <Link to="/check">Check your secret</Link>
    </button>
  </div>
)

export default Index
