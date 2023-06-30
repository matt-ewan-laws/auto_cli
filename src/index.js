/** @namespace Entrypoint */
import { createRoot } from "react-dom/client";

import Routes from "./Routes";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(<Routes />);
