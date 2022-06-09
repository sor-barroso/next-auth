"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegistering = createRegistering;

async function createRegistering({
  options,
  paramValue,
  cookieValue
}) {
  let registering = undefined;

  if (paramValue) {
    registering = paramValue;
  } else if (cookieValue) {
    registering = cookieValue;
  }

  return {
    registering,
    registeringCookie: registering != cookieValue ? registering : undefined
  };
}