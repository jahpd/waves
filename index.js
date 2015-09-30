
/**
 * @name waves
 * @module waves
 * rmstodb is a function defined as Miller Puckette
 */

var a0 = 10e-5;

var quadratic = function(a){
  return Math.sqrt(a);
};

var _noise = function(){
  return Math.random() * 2 - 1;
};

var _sin = function(f, t){
  return Math.sin(2*Math.PI*f*t);
};

var _saw = function(f, t){
  return 2*t_mod_f(f, t) - 1
}

var _inversesaw = function(f, t){
  return 1 - 2*t_mod_f(f, t)
}

var t_mod_f = function(f, t){
  return t % (1/f) * f
}

export function ruido(a) {
  return _noise() * quadratic(a);
}

export function senoide(f, a, t){
  return _sin(f, t) * quadratic(a)
}

export function serra(f, a, t){
  return _saw(f, t) * quadratic(a);
}

export function serrainvertida(f, a, t){
  return _inversesaw(f, t) * quadratic(a);
}