"use client"

import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts"

import {
    Card, CardAction,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {Dot} from "lucide-react";

export const description = "A multiple line chart"

const chartData = [
    { time: "11:00", onTime: 59, onTimeM: 59, Late: 10, LateM: 10 },
    { time: "10:00", onTime: 52, onTimeM: 52, Late: 30, LateM: 30 },
    { time: "12:00", onTime: 65, onTimeM: 65, Late: 40, LateM: 65 },
    { time: "13:00", onTime: 42, onTimeM: 42, Late: 20, LateM: 20 },
    { time: "14:00", onTime: 45, onTimeM: 45, Late: 50, LateM: 50 },
    { time: "15:00", onTime: 50, onTimeM: 50, Late: 60, LateM: 60 },
    { time: "16:00", onTime: 62, onTimeM: 62, Late: 70, LateM: 70 },
    { time: "17:00", onTime: 45, onTimeM: 45, Late: 75, LateM: 75 },
    { time: "18:00", onTime: 48, onTimeM: 48, Late: 80, LateM: 80 },
    { time: "19:00", onTime: 55, onTimeM: 55, Late: 65, LateM: 65 },
];

const chartConfig = {
    onTime: {
        label: "On Time",
        color: "#7599a5",
    },
    Late: {
        label: "Late",
        color: "#e9ddf3",
    },
} satisfies ChartConfig

export function ChartLineMultiple() {
    return (
        <Card className="shadow-none bg-[#f9f9f9] dark:bg-[#0B1C2C] dark:border-none">
            <CardHeader className="flex max-sm:flex-col justify-between">
                <CardTitle>Patient Overview</CardTitle>
                <CardDescription className="flex gap-5">
                    <CardAction className="flex items-center gap-2">
                        <Dot size={10} className="bg-[#7599a5] text-transparent rounded-full" />
                        On Time
                    </CardAction>
                    <CardAction className="flex items-center gap-2">
                        <Dot size={10} className="bg-[#e9ddf3] text-transparent rounded-full" />Late
                    </CardAction>
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-0 pr-10 ">
                <ChartContainer className="h-80 max-sm:h-52 p-0 w-full" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 0,
                            right: 0,
                            top: 20,
                        }}
                        compact={false}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={5}
                            tickFormatter={(value) => value.slice(0, 5)}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={2}
                            domain={[0, 'auto']}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="onTime"
                            type="monotone"
                            stroke="var(--color-onTime)"
                            strokeWidth={4}
                            dot={false}
                            className="max-sm:hidden"
                        />
                        {/* Mobile Version*/}
                        <Line
                            dataKey="onTimeM"
                            type="monotone"
                            stroke="var(--color-onTime)"
                            strokeWidth={2}
                            dot={false}
                            className="max-sm:inline hidden"
                        />
                        <Line
                            dataKey="Late"
                            type="monotone"
                            stroke="var(--color-Late)"
                            strokeWidth={4}
                            dot={false}
                            className="max-sm:hidden"
                        />
                        {/* Mobile Version */}
                        <Line
                            dataKey="LateM"
                            type="monotone"
                            stroke="var(--color-Late)"
                            strokeWidth={2}
                            dot={false}
                            className="max-sm:inline hidden"
                        />

                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
