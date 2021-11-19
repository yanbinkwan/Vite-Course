import { watchEffect, ref } from "vue"

export function useStorage(name, value = []) {
  let data = ref(JSON.parse(localStorage.getItem(name) || '[]'))
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(value))
  })
  return data
}