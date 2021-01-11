import prod from "./prod.js";
import dev from "./dev.js";

export default process.env.NODE_ENV === "production" ? prod : dev;
