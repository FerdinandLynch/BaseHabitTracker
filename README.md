# BaseHabitTracker

BaseHabitTracker is a lightweight Base Mini App built with Next.js, TypeScript, wagmi, and viem.

It provides a simple interface for completing a habit on-chain and viewing the current completion count for a connected wallet.

Repository: https://github.com/FerdinandLynch/BaseHabitTracker.git

## Overview

The current version focuses on a minimal habit-tracking flow.

A user connects a wallet, reads the current habit completion count from the contract, submits a completion transaction, and sees the updated count after the transaction is processed.

The app also sends transaction information to a dashboard API for off-chain tracking.

## Features

- Connect a wallet.
- Read `habitCount(address)` from the deployed contract.
- Submit `completeHabit()` to record a habit completion.
- Return the transaction hash after submission.
- Refresh the on-chain completion count after completion.
- Track submitted transactions through a dashboard API.
- Use a small TypeScript codebase suitable for iteration.

## Tech Stack

- Next.js
- TypeScript
- wagmi
- viem
- Base Mini App environment

## Contract

The app is configured to interact with the following contract:

- Contract address: `0x5387C64C4046A994C66fAca67baC6C98D14DDf92`
- ABI location: `lib/abi/baseHabitTrackerAbi.ts`

## Setup

Clone the repository:

`git clone https://github.com/FerdinandLynch/BaseHabitTracker.git`

Move into the project directory:

`cd BaseHabitTracker`

Install dependencies using your preferred package manager:

`npm install`

Start the development server:

`npm run dev`

Open the local development URL shown in your terminal.

## Usage

1. Launch the app.
2. Connect a wallet.
3. View the current habit completion count.
4. Select the action to complete a habit.
5. Confirm the transaction in the connected wallet.
6. Wait for the transaction hash to be returned.
7. Refresh or allow the app to refresh the displayed count.
8. Review tracked transaction activity through the configured dashboard API.

## Configuration Notes

The project retains several placeholder values for environment-specific configuration.

These include:

- `BASEHABITTRACKER_CONTRACT_ADDRESS_PLACEHOLDER`
- `BASE_APP_ID_PLACEHOLDER`
- `TALENT_VERIFICATION_PLACEHOLDER`
- `BUILDER_CODE_PLACEHOLDER`

Replace placeholder values only when the corresponding integration is ready to be configured.

Keep contract-related values aligned with the ABI in `lib/abi/baseHabitTrackerAbi.ts`.

## Current Limitations

The current contract tracks only a simple on-chain completion count.

This version does not include multi-habit management.

This version does not include streak logic.

This version does not include a calendar view.

This version does not include reminder systems.

The app is intentionally small and focused on the core completion flow.

## Project Goals

BaseHabitTracker is intended to provide a clear foundation for a Base habit-tracking experience.

The current implementation keeps the contract interaction simple and visible.

Future work can build on the existing wallet connection, read flow, write flow, and transaction tracking behavior.
