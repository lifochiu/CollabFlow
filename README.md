## Enviroment Setup

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Module Description

This README provides a brief summary of all available components in the Collab Flow project, categorized by their location in the file structure.

Main Shared Components (app/(main)/\_component/)
Header (Header.tsx): An asynchronous server component that displays the application title and the current user's avatar. It dynamically fetches the user's name and theme color from login actions.

Footer (footer.tsx): A functional component that renders the copyright information for "Collab Flow 2026" at the bottom of the page.

Navigate (Maps.tsx): A navigation bar providing links to create tasks, view the board, view the list, and log out of the application.

TaskContext (taskContext.tsx): A client-side provider that manages real-time task data from Firebase. It organizes tasks into "To Do," "In Progress," and "Done" states for use throughout the app.

UserIcon (user.tsx): A reusable avatar component that displays a user's initial inside a circle colored according to their specific user color.

LevelBadge (levelBadge.tsx): A visual indicator for task priority (High, Medium, Low), color-coded red, yellow, and green respectively.

StatusBadge (statusBadge.tsx): A visual indicator for a task's current workflow status (To Do, In Progress, Done).

Board Components (app/(main)/board/)
Task Card (tasks.tsx): A component designed for the board view that displays a task's title, its priority badge, and the creator's user icon within a fixed-size card.

List Components (app/(main)/list/)
List Card (cards.tsx): A client-side component for the list view that displays task details in a horizontal row, including the title, priority level, status badge, and user icon.

Authentication Components (app/(auth)/\_component/)
Auth Header (Header.tsx): A simplified version of the header used for authentication pages, displaying only the "Collab Flow" application title.
