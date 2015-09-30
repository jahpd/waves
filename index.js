
/**
 * @name waves
 * @module waves
 * rmstodb is a function defined as Miller Puckette
 */

var a0 = 10e-5;

var rmstodb = function(a){
  return (20 * Math.log10(a/a0));
};

var _noise = function(){
  return Math.random() * 2 - 1;
};


export default function ruido(a) {
  return _noise() * a;
}