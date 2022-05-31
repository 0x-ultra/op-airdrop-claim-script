# Claim OP airdrop without having to wait

## Claim for yourself

0. run `yarn`
1. Go to infura and create an account, add the optimism addon.
2. From infura get the optimism endpoint and put it in .env
3. Get your private and public keys and put them in .env
4. Run `npx hardhat run --network optimism scripts/claim.js`

## Claim for a friend

Follow previous steps until point (3)

- Get your friends's public key and put it in .env under the variable `FRIEND`
- Run `npx hardhat run --network optimism scripts/friend-claim.js`
