import { inject, reactive } from 'vue'

const storeKey = '__store__'

function useStore() {
  console.log('useStore--->', inject(storeKey));
  return inject(storeKey)
}

function createStore(options) {
  return new Store(options)
}

class Store {

  constructor(options) {
    this.$options = options
    this._store = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
  }

  get state() {
    return this._store.data
  }

  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  install(app) {
    console.log('install--->', app);
    app.provide(storeKey, this)
  }
}

export { useStore, createStore }