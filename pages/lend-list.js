import styles from "../styles/Home.module.css"
import { useMoralis } from "react-moralis"
import NFTBox2 from "../components/NFTBox2"
import networkMapping from "../constants/networkMapping.json"
import GET_ACTIVE_LOANS from "../constants/subgraphQuerries2"
import { useQuery } from "@apollo/client"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const lendAddress = chainId ? networkMapping[chainString].NFTlend[0] : null

    const { loading, error, data: loanedNfts } = useQuery(GET_ACTIVE_LOANS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Ongoing loans</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !loanedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        loanedNfts.activeLoans.map((nft) => {
                            const { loanValue, interestRate, nftAddress, tokenId, borrower } = nft
                            return lendAddress ? (
                                <NFTBox2
                                    loanValue={loanValue}
                                    interestRate={interestRate}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    lendAddress={lendAddress}
                                    borrower={borrower}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>Network error, please switch to a supported network. </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
