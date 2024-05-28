import { createBrowserRouter } from "react-router-dom";
import Nav from "@component/Nav";
import Notfound from "@page/Notfound";

const route = createBrowserRouter([
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
  },{
    path:"*",
    element: <Notfound/>
  },
]);/*,{basename:"/portfolio"}*/

export default route;
