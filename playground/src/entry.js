var Cartes = require('../../index.js')
var $ = require('jquery')

var stick = null
var offset = new Cartes.vec2()

function makeMoveable(e){
  var el = $(e)
  el.on('mousedown', function(ev){
    if (ev.buttons % 2 === 1){
      offset = new Cartes.vec2(ev.pageX,ev.pageY).sub(el.css('left'),el.css('top'))
      stick = el
    }
  })
  el.on('mouseup', function(ev){
    if (ev.buttons % 2 === 1 && el.is(stick)){
      stick = null
    }
  })
  el.on('mouseleave', function(ev){
    if(el)
  })
  el.on('mousemove', function(ev){
    if (el.is(stick)){
      var nju =
    }
  })
}

$('.dot').each(function(i,e){
  makeMoveable(e)
})
