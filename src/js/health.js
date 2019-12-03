export default function health(options) {
  if (options.health > 50) {
    return 'healthy';
  }

  if (options.health <= 50 && options.health >= 15) {
    return 'wounded';
  }

  if (options.health < 15 && options.health > 0) {
    return 'critical';
  }

  return 'not defined';
}
