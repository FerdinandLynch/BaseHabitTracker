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
