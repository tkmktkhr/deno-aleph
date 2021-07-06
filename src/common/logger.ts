import logger from "aleph/shared/log.ts";

// FIXME Browser Error -> Uncaught (in promise) ReferenceError: Deno is not defined
logger.setLevel(Deno.env.get("LOG_LEVEL"));
logger.debug("debug");
logger.info("info");
logger.warn("warn");
logger.error("error");
export default logger;

// TODO setup logger
// logger level should be 'debug' for development mode, 'info' or 'warn'for production mode.

// TODO Logger for ERROR handler.
// When the server gets an Error, the error is caught here.
