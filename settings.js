const Store = require('electron-store')
const storage = new Store()


function getWinSettings () {
  const default_bounds = [700, 200]
  const size = storage.get('win-size')

  if (size) return size
  else {
    storage.set('win-size', default_bounds)
    return default_bounds
  }
}


function savePosition (winpos) {
  storage.set('win-size', winpos)
  // console.log(winpos)
}


module.exports = {
  getWindowSettings: getWinSettings,
  savePosition: savePosition
}