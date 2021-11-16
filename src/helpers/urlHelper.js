import "dotenv/config";

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || "";

// const { REACT_APP_USER_MANAGEMENT, REACT_APP_BOT_BACKEND } = process.env;

const REACT_APP_USER_MANAGEMENT = "http://localhost:9000/";

const backend = {
  serverUrl: REACT_APP_USER_MANAGEMENT,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ""}`,
};

export { backend };
