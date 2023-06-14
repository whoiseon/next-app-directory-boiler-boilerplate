interface Props
{
    params: {
        searchTerm: string,
    };
}

async function getSearchData(searchTerm: string): Promise<SearchDataType[] | null>
{
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json`);
    if (!response) return null;
    const data: SearchDataType[] = await response.json();

    return data;
}

async function SearchResult({ params: { searchTerm } }: Props)
{
    const searchResults = await getSearchData(searchTerm);

    return (
        <div>
            <div className="flex justify-center mt-4 mb-4">
                you entered :<span className='ml-4'>{decodeURIComponent(searchTerm)}</span>
            </div>
            <ol className='space-y-5 w-[600px]'>
                {searchResults?.map(result => (
                    <li key={result.place_id} className="flex flex-col p-4 bg-element2 rounded shadow">
                        <p>{result.display_name}</p>
                        <p>
                            lat: {result.lat} / lon: {result.lon}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default SearchResult;
