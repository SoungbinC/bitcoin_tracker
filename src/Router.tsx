import { createBrowserRouter } from "react-router-dom"
import App from "./App"

const Router = createBrowserRouter([
    {
        path: process.env.PUBLIC_URL + "/",
        element: <App />,
    },
])

export default Router
