# BaseHabitTracker

A lightweight Base Mini App built with Next.js + TypeScript + wagmi + viem.

## What it does

- Connect wallet
- Read `habitCount(address)` on-chain
- Submit `completeHabit()` on-chain
- Return tx hash and refresh count
- Track tx offchain to dashboard API

## Contract

- Address: `0x5387C64C4046A994C66fAca67baC6C98D14DDf92`
- ABI: `lib/abi/baseHabitTrackerAbi.ts`

## Placeholders retained

- `BASEHABITTRACKER_CONTRACT_ADDRESS_PLACEHOLDER`
- `BASE_APP_ID_PLACEHOLDER`
- `TALENT_VERIFICATION_PLACEHOLDER`
- `BUILDER_CODE_PLACEHOLDER`
- `GITHUB_TOKEN_PLACEHOLDER`
- `VERCEL_TOKEN_PLACEHOLDER`

## Limits of current version

Current contract tracks only a simple on-chain completion count.
This version does not implement multi-habit management, streak logic, calendar view, or reminder systems.
