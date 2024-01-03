export default class Pencil {
  constructor(type, color = null) {
    this.type = type;
    this.color = color;
    this.maxText = type === "graphite" ? 50 : 30;
  }

  getDescription() {
    if (this.type === "graphite") {
      return "Graphite Pencil";
    } else if (this.type === "colored" && this.color) {
      return `${this.color} Colored Pencil`;
    }
  }

  getMaxTextCount() {
    console.log(this.maxText);
    return this.maxText;
  }
}
