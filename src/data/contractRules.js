const rules = [
    {
        id: 1,
        name: "Step 1: Approve USDC",
        details: {
            title: "Approve Contract to Transfer USDC from Your Wallet",
            description: "Before depositing USDC tokens to the SSS contract, wallet owner needs to pre-approve amount that the contract can transfer out from the wallet. " +
                "This is to prevent contract draining USDC balance of the wallet.\n\n" +
                "Check the USDC balance and decide how much amount to be approved.\n\n" +
                "Click the \"APPROVE\" button and sign the transaction using the connected wallet.",
            link: "#",
        },
    },
    {
        id: 2,
        name: "Step 2: Deposit USDC",
        details: {
            title: "Deposit USDC to SSS Contract",
            description: "After approving the amount, wallet owner can deposit USDC tokens into the SSS contract no exceeding the approved amount.\n\n" +
                "Check the approved USDC amount and decide how much amount to be deposited.\n\n" +
                "Click the \"DEPOSIT\" button and sign the transaction using the connected wallet.",
            link: "#",
        },
    },
    {
        id: 3,
        name: "Step 3: Withdraw USDC",
        details: {
            title: "Withdraw Deposited USDC at Anytime",
            description: "Changing your mind? No worries, wallet owner can withdraw deposited USDC tokens at anytime.\n\n" +
                "Check the deposited USDC amount and decide how much amount to be withdrew.\n\n" +
                "Click the \"WITHDRAW\" button and sign the transaction using the connected wallet.",
            link: "#",
        },
    },
    {
        id: 4,
        name: "Step 4: Vouch the Project",
        details: {
            title: "Coming Soon...",
            description: "",
            link: "#",
        },
    },
];

export default rules;
