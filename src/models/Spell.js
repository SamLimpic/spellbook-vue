export default class Spell {
  constructor({ index, name, desc, higher_level, range, components, material, ritual, duration, concentration, level, damage, school }) {
    this.index = index
    this.name = name
    this.description = desc
    this.leveled = higher_level
    this.range = range
    this.components = components
    this.material = material
    this.ritual = ritual ? "Yes" : "No"
    this.duration = duration
    this.concentration = concentration ? "Yes" : "No"
    this.level = level
    this.damage = damage.damage_at_slot_level[0] + damage.damage_type.name
    this.school = school.name
    this.img = require("./assets/" + school.toLowerCase() + ".png")
  }
}