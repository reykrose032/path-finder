import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='topnav'>
            <div className='dropdown'>
                <a className='dropdown-link'>Algorithm</a>
                <div className='dropdown-content'>
                    <Link href="/algorithm/bfs"><a>Breadth First Search</a></Link>
                    <Link href="/algorithm/dfs"><a>Depth First Search</a></Link>
                </div>
            </div>
            <Link href="/visualize"><a>Visualize!</a></Link>
            <Link href="/clear"><a>Clear Board</a></Link>
        </div>
    );
}

export default Navbar;