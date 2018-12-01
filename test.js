require('jsdom-global')()
const assert = require('assert')
const { position } = require('./')


describe('Bianco pointer', function() {
  it('can read the pointer position from a mousemove', function(done) {
    const div = document.createElement('div')

    div.addEventListener('mousemove', function(event) {
      const { x, y } = position(event)

      assert.equal(x, 1)
      assert.equal(y, 1)

      done()
    })

    div.dispatchEvent(new window.MouseEvent('mousemove', {
      clientX: 1,
      clientY: 1
    }))
  })

  it('can read the pointer position from multiple touches', function(done) {
    const div = document.createElement('div')

    div.addEventListener('touchmove', function(event) {
      const { x, y } = position(event)

      assert.equal(x, 10)
      assert.equal(y, 10)

      done()
    })

    div.dispatchEvent(new window.TouchEvent('touchmove', {
      targetTouches: [{
        clientX: 10,
        clientY: 10
      }, {
        clientX: 2,
        clientY: 2
      }]
    }))
  })
})