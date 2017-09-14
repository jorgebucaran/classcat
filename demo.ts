// Testing and presentation purpose will be removed before merge

import classwrap from 'classwrap'

classwrap("btn")

classwrap(12)

classwrap({
  "btn-active": true,
  "btn-large": false
})

classwrap([
  "btn",
  "btn-active",
  "btn-large"
])

classwrap([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
])

classwrap([
  "tab",
  {
    tab: {
      "--success": true,
      "--error": false,
      "--pending": false
    }
  }
])