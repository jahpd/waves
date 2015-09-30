
/**
 * @name waves
 * @module waves
 * rmstodb is a function defined as Miller Puckette
 */

var a0 = 10e-5;

var rmstodb = function(a){
  return Math.sqrt(a);
};

var _noise = function(){
  return Math.random() * 2 - 1;
};

var _sin = function(f){
  return Math.sin(2*Math.PI*f*t);
};

export default function ruido(a) {
  return _noise() * rmstodb(a);
}

export default function senoide(f, a){
  return _sin(f) * rmstodb(a)
}