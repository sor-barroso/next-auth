import { InternalOptions } from "../../lib/types";
interface CreateCallbackUrlParams {
    options: InternalOptions;
    /** Try reading value from request body (POST) then from query param (GET) */
    paramValue?: string;
    cookieValue?: string;
}
/**
 * Get callback URL based on query param / cookie + validation,
 * and add it to `req.options.callbackUrl`.
 */
export declare function createRegistering({ options, paramValue, cookieValue, }: CreateCallbackUrlParams): Promise<{
    registering: string | undefined;
    registeringCookie: string | undefined;
}>;
export {};
