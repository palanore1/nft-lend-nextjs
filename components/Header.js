import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Lending Protocol</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/list-nft">
                    <a className="mr-4 p-6">List NFT</a>
                </Link>
                <Link href="/collect">
                    <a className="mr-4 p-6">Collect</a>
                </Link>
                <Link href="/lend-list">
                    <a className="mr-4 p-6">Current Loans</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
