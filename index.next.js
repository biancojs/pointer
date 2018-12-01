/**
 * Normalize the pointer events to get a single position of the pointer on the screen
 * @param   { Object } event - event object
 * @returns { Object } position - pointer position on the screen
 * @returns { number } position.x - x condinates relative to the screen
 * @returns { number } position.y - y condinates relative to the screen
 *
 * @example
 *
 * import { position } from 'bianco.pointer'
 * import { add } from 'bianco.events'
 *
 *
 * add(window, 'touchmove mousemove', function(event) {
 *   const { x, y } = position(event)
 *
 *   console.log('Your pointer y is=', y, 'your pointer x is', x)
 * })
 *
 */
export function position(event) {
  // normalize the pointer events
  const e = event.targetTouches ? event.targetTouches[0] : event

  return {
    x: e.clientX,
    y: e.clientY
  }
}

export default {
  position
}