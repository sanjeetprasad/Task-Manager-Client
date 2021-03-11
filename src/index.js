import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {TaskOrg} from './components/TaskOrg'
import { BrowserRouter as Router  } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TaskOrg />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


