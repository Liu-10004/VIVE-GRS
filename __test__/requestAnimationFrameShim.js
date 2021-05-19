/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/218
 */

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}
