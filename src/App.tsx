import Router from "@route/Route";
import { RouterProvider } from "react-router-dom";
import "@component/style.css";
import Cursor from "@component/Cursor";

function App() {
/*   const lenis=useRef<Lenis>()
  useEffect(()=>{
   if(lenis.current){
    lenis.current = new Lenis()
    
    function raf(time:DOMHighResTimeStamp) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
   }
  },[])
 */
  return (
    <>
      {/* <CursorifyProvider cursor={<Cursor />}> */}
        <RouterProvider router={Router} />
        <Cursor />
      {/* </CursorifyProvider> */}
    </>
  );
}

export default App;
