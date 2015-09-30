
/**
 * @name waves
 * @module 
 * rmstodb is a function defined as Miller Puckette
 */

var rmstodb = function(a){
  20 * Math.log10(a/10e-5);
};

export default function noise(a) {
  return (Math.random() * 2 - 1) * rmstodb(a);
}