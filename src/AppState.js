import mobx, { observable, computed } from 'mobx'
import tron from 'reactotron'

const appState = new class AppState {
  // a simple counter
  @observable counter = 50

  // an example of a computed column
  @computed get half () {
    return this.counter / 2
  }
}

const inc = () => {
  appState.counter++
}

mobx.autorun(() => {
  const { half, counter } = appState
  // tron.log({ counter, half })
  tron.log(mobx.toJSON(appState))
})

mobx.observe(appState, 'half', (newValue, oldValue) => {
  if (newValue % 2 === 0) {
    tron.log(`half changed from ${oldValue} to ${newValue}`)
  }
})

setInterval(inc, 2000)

export default appState

