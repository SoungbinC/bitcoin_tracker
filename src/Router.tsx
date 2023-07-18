import { createBrowserRouter, createHashRouter } from "react-router-dom"
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"
import Price from "./routes/Price"
import Chart from "./routes/Chart"
import App from "./App"

const Router = createHashRouter(
    [
        {
            path: "/",

            element: <App />,
            children: [
                {
                    path: "",
                    element: <Coins />,
                },
                {
                    path: "/:coinId",
                    element: <Coin />,
                    children: [
                        {
                            path: "chart",
                            element: <Chart />,
                        },
                        {
                            path: "price",
                            element: <Price />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        basename: "/",
    }
)

export default Router
