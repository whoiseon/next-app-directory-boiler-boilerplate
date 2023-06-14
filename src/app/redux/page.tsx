import CounterBox from "@/components/CounterBox";

function ReduxPage()
{
    return (
        <div className="flex flex-col gap-4">
            <h1 className="flex justify-center">Redux toolkit counter</h1>
            <CounterBox />
        </div>
    );
}

export default ReduxPage;
