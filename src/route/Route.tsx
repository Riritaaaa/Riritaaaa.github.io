import { createHashRouter } from "react-router-dom";
import Nav from "@component/Nav";

const route = createHashRouter([
  {
    path: "/",
    element: <Nav />,
    /* children: [
      {
        index: true,
        element:  <Home id="home" />,
      },
      {
        path: "port",
        element: <Port id="port" />,
      },
    ], */
  },
]);/*,{basename:"/portfolio"}*/

export default route;
