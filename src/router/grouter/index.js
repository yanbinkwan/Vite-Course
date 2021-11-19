import { ref, inject } from "vue";
import RouterView from './RouterView.vue'
import RouterLink from '../grouter/RouterLink.vue'

const ROUTER_KEY = '__ROUTERKEY__'

const useRouter = () => inject(ROUTER_KEY)

const createRouter = (options) => new Router(options)

const createWebHashHistory = () => {

  function bindEvent(fn) {
    window.addEventListener('hashchange', fn)
  }

  return { bindEvent, url: window.location.hash.slice(1) || '/' }
}

const createWebHistory = () => {
  function bindEvent(fn) {
    window.addEventListener('popstate', fn)
    window.addEventListener('load', () => {
      const { pathname } = window.location
      history.replaceState({ path: pathname }, "", pathname)
    })
  }

  function push(state) {
    window.history.pushState({ path: state }, "", state.path)
  }

  return { bindEvent, url: window.location.pathname || '/', push }
}

class Router {
  constructor(options) {
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)

    this.history.bindEvent(() => {
      this.current.value = window.location.pathname
    })
  }

  install(app) {
    app.provide(ROUTER_KEY, this)
    app.component("router-link", RouterLink)
    app.component("router-view", RouterView)
  }

  push(state) {
    this.history.push(state);
    this.current.value = state.path
  }
}

export { useRouter, createRouter, createWebHashHistory, createWebHistory }