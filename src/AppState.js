import { observable, computed, autorun } from 'mobx'
import tron from 'reactotron'

const isHalfEven = (value) => value % 2 === 0

const appState = new class AppState {
  // a simple counter
  @observable counter = 50

  // an example of a computed column
  @computed get half () {
    return this.counter / 2
  }

  // dependant computed columns
  @computed get isHalfEven () {
    return isHalfEven(this.half)
  }
}

const inc = () => {
  appState.counter++
}

autorun(() => {
  const { counter, half, isHalfEven } = appState
  tron.log({ counter, half, isHalfEven })
})

autorun(() => {
  if (appState.isHalfEven) {
    tron.log(`half is now even ${appState.half}`)
  }
})

setInterval(inc, 2000)

export default appState

