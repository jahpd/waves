
/**
 * test
 */

import {ruido, senoide} from "./index";

export function dsp(t){
  return ruido(senoide(1, 1))
}