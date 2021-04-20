import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Spell from './models/Spell'

export const AppState = reactive({
  /** @type {Spell[]} */
  results: [],
  /** @type {Spell} */
  activeSpell: null
})