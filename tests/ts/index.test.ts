
import classwrap from 'classwrap'

let className: string;

className = classwrap("btn")

className = classwrap(12)

className = classwrap({
  "btn-active": true,
  "btn-large": false
})

className = classwrap([
  "btn",
  "btn-active",
  "btn-large"
])

className = classwrap([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
])

className = classwrap([
  "tab",
  {
    tab: {
      "--success": true,
      "--error": false,
      "--pending": false
    }
  }
])