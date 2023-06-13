import React from 'react'
import { createRoot } from 'react-dom/client'
import { Meteor } from 'meteor/meteor'
import { App } from '../imports/ui/App'

Meteor.startup(() => {
  const container = document.getElementById('react-target')
  const root = createRoot(container!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
  root.render(<App />)
})
