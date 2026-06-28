# BaseHabitTracker

BaseHabitTracker is a lightweight Base Mini App built with Next.js, TypeScript, wagmi, and viem.

It provides a simple interface for completing a habit on-chain and viewing the current completion count for a connected wallet.

Repository: https://github.com/FerdinandLynch/BaseHabitTracker.git

## Overview

The current version focuses on a minimal habit-tracking flow.

A user connects a wallet, reads the current habit completion count from the contract, submits a completion transaction, and sees the updated count after the transaction is processed.

The app also sends transaction information to a dashboard API for off-chain tracking.
