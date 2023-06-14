interface Props { }

function Loading({ }: Props)
{
    return (
        <div>
            <div className="flex justify-center mt-4 mb-4">
                <div className="flex bg-element2 rounded w-[200px] h-[24px]"></div>
            </div>
            <ol className='space-y-5 w-[600px]'>
                <li className="flex flex-col p-4 bg-element2 rounded shadow h-[80px]"></li>
                <li className="flex flex-col p-4 bg-element2 rounded shadow h-[80px]"></li>
                <li className="flex flex-col p-4 bg-element2 rounded shadow h-[80px]"></li>
                <li className="flex flex-col p-4 bg-element2 rounded shadow h-[80px]"></li>
                <li className="flex flex-col p-4 bg-element2 rounded shadow h-[80px]"></li>
            </ol>
        </div>
    );
}

export default Loading;
