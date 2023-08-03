import { useQuery, gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: {lender: "0x0000000000000000000000000000000000000000"} ) {
            id
            lender
            borrower
            nftAddress
            tokenId
            minLoanValue
            interestRate
        }
    }
`

export default function GraphExample() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)
    return <div>hi</div>
}
