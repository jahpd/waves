
/**
 * test
 */

import {ruido, senoide, serra, serrainvertida, triangulo} from "./index";

var ra = Math.random() * 0.125 ;
var rb = Math.random() * 0.125 ;
var rc = Math.random() * 0.125 ;
var rd = Math.random() * 0.125 ;

export function dsp(t){
  var a =  ruido(triangulo(ra*serra(10e-4, 0.5, t), 1, t))
  var b =  ruido(triangulo(rb*serrainvertida(10e-4, 0.5, t), 1, t))
  var c =  ruido(triangulo(rc*serra(10e-4, 0.25, t), 1, t))
  var d =  ruido(triangulo(rd*serrainvertida(10e-4, 0.25, t), 1, t))
  return [a + c, b + d]
}