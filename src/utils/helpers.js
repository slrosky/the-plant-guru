export function randomPlant(plants) {
  console.log(plants);
  let x = Math.floor(Math.random() * plants.length - 1);
  console.log(plants[x].common_name);
  return plants[x];
  // this.setState({ plant: this.state.plants[x] });
  // do crud functionality here
}
