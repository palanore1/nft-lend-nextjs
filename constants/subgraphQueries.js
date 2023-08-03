import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: {lender: "0x0000000000000000000000000000000000000000"}) {
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

export default GET_ACTIVE_ITEMS
