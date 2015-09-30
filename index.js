
/**
 * @name waves
 * @module osc
 * rmstodb is a function defined as Miller Puckette
 */

var a0 = 10e-5;

var rmstodb = function(a){
  (20 * Math.log10(a/a0)) + a0;
};

var _noise = function(){
  Math.random() * 2 - 1;
};

export default function ruido(a) {
    _noise() * a;
}