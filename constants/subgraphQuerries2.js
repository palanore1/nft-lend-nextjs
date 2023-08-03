import { gql } from "@apollo/client"

const GET_ACTIVE_LOANS = gql`
    {
        activeLoans(first:5, , where:{lender_not: "0x0000000000000000000000000000000000000000"}){
            id
            lender
            borrower
            nftAddress
            tokenId
            loanValue
            interestRate
        }
    }
`

export default GET_ACTIVE_LOANS