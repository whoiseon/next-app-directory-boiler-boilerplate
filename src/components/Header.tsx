import Link from "next/link";

interface Props { }

function Header({ }: Props)
{
    return (
        <nav className="flex item-center justify-center gap-4 w-full h-[60px] sticky top-0 bg-element1">
            <Link href="/" className="flex items-center text-lg font-medium hover:underline">
                Home
            </Link>
            <Link href="/todos" className="flex items-center text-lg font-medium hover:underline">
                Todos
            </Link>
            <Link href="/search" className="flex items-center text-lg font-medium hover:underline">
                Search
            </Link>
            <Link href="/redux" className="flex items-center text-lg font-medium hover:underline">
                Redux
            </Link>
            <Link href="/zustand" className="flex items-center text-lg font-medium hover:underline">
                Zustand
            </Link>
        </nav>
    );
}

export default Header;
