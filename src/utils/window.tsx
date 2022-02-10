import UAParser from "ua-parser-js";
/* eslint-disable prefer-const */
/**
 * Devuelve el Sistema Operativo en el que se encuentra navegando el usuario
 * @returns {string}
 */
export function getOS() {
  let parser = new UAParser();
  parser.setUA(navigator.userAgent);
  const OS = parser.getOS();
  return OS.name + " " + OS.version;
}

export function getOSName() {
  let parser = new UAParser();
  parser.setUA(navigator.userAgent);
  const OS = parser.getOS();
  return OS.name;
}

/**
 * Devuelve el Navegador en el que se encuentra navegando el usuario
 * @returns {string}
 */

export function getDynamicUA(agent: string) {
  const parser = new UAParser();
  parser.setUA(agent);
  const OS = parser.getOS();
  return OS.name;
}

export function resolveAgent(os: string) {
  return os === "Android" || os === "iOS" ? "app" : "webapp";
}
