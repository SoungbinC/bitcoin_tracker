import { useQuery } from "react-query"
import { fetchCoinHistory } from "../api"
import ApexChart from "react-apexcharts"

import { useOutletContext } from "react-router"
interface IHistorical {
    time_open: number
    time_close: number
    open: string
    high: string
    low: string
    close: string
    volume: string
    market_cap: number
}

interface ChartProps {
    coinId: string
}
function Chart() {
    const coinId = useOutletContext<ChartProps>()
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
        fetchCoinHistory(coinId.coinId)
    )

    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data:
                                data?.map((price) => {
                                    return {
                                        x: new Date(price.time_close),
                                        y: [
                                            parseFloat(price.open),
                                            parseFloat(price.high),
                                            parseFloat(price.low),
                                            parseFloat(price.close),
                                        ],
                                    }
                                }) ?? [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            type: "candlestick",
                            height: 350,
                            width: 500,
                            background: "transparent",
                        },
                        title: {
                            text: "CandleStick Chart",
                            align: "left",
                        },

                        xaxis: {
                            type: "datetime",
                        },
                        yaxis: {
                            tooltip: {
                                enabled: true,
                            },
                        },
                    }}
                />
            )}
        </div>
    )
}

export default Chart
