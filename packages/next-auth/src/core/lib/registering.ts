import { InternalOptions } from "../../lib/types"

interface CreateRegisteringParams {
  options: InternalOptions
  /** Try reading value from request body (POST) then from query param (GET) */
  paramValue?: string
  cookieValue?: string
}

/**
 * Get registering flag based on query param / cookie + validation,
 * and add it to `req.options.registering`.
 */
export async function createRegistering({
  options,
  paramValue,
  cookieValue,
}: CreateRegisteringParams) {
  let registering: string | undefined = undefined;

  if (paramValue) {
    registering = paramValue;
  } else if (cookieValue) {
    registering = cookieValue;
  }

  return {
    registering,
    registeringCookie: registering != cookieValue ? registering : undefined,
  }
}
