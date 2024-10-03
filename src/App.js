import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
