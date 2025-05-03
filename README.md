Installation and configuration for `shadcn/ui` for `Next.js`.

### Create project
Run the `init` command to create a new Next.js project or to setup an existing one:

```terminal
npx shadcn@latest init
```

### Add shadcn/ui Components
This is the command to add specific components of the library

```terminal
npx shadcn@latest add [component]
```

### Tailwind
This should be already configured properly in the most recent versions

### Aceternity UI
This are the commonly used utilities for using Aceternity UI, start by installing the dependencies

```terminal
npm i motion clsx tailwind-merge
```

Add `lib/utils.ts` file, even if this should be already present this is the code for it:

```ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

If you're using Next.js 15 and React 19, you'll need to the following changes in order to use framer 
motion (which is now motion), since motion is not compatible with React 19 yet.

```json
 "dependencies": {
    "motion": "^12.0.0-alpha.1",
    "next": "15.0.3",
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106",
    "tailwind-merge": "^2.5.5"
  },
  "overrides": {
    "motion": {
      "react": "19.0.0-rc-66855b96-20241106",
      "react-dom": "19.0.0-rc-66855b96-20241106"
    }
  },
```

Some cool components:

```terminal
npx shadcn@latest add https://ui.aceternity.com/registry/wavy-background.json
```
