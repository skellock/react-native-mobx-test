import mobx from 'mobx'
import tron from 'reactotron'

const appState = mobx.observable({
  counter: 0
})

const inc = () => {
  appState.counter++
  setTimeout(inc, 2000)
}

mobx.autorun(() => {
  tron.log(appState)
})

inc()

export default appState
