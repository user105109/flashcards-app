# Flashcards App 🎴

A flashcard app built with **Angular 21** to quiz yourself on Spring Boot concepts. It's my first Angular project, built from the [roadmap.sh Flash Cards project](https://roadmap.sh/projects/flash-cards). It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.2.28.

## Features

- Pre-defined flashcards with questions and answers
- One card at a time, with the answer hidden until you reveal it
- A single Show/Hide Answer button whose label follows the current state
- Previous/Next navigation that stops at the first and last card
- Progress indicator: "Card 3/10" plus a progress bar
- Two pages with routing: **Study** and **About**, without page reloads
- Every new card starts with the answer hidden

## Angular concepts used

| Concept | Where it's used |
|---|---|
| Components and composition | `Flashcard`, `NavigationCtrl` and `ProgressBar` are composed inside the `Study` page |
| Property binding | Parent passes `[currentCard]`, `[hideAnswer]`, `[progress]` and `[totalCards]` to children |
| Event binding / `@Output` | `NavigationCtrl` emits clicks, and the parent handles them |
| Signals and `computed` | Current index, answer visibility, current card and button label |
| Routing and lazy loading | `loadComponent` for the `study` and `about` routes, with `routerLink` navigation |
| Dumb (presentational) components | The card and progress bar only display what they receive |

Not used yet (planned): forms, services and dependency injection, deferrable views.

## Project structure

```
src/app/
├── components/
│   ├── flashcard/         # displays one question and its answer
│   ├── navigation-ctrl/   # previous / next / show-hide buttons
│   └── progress-bar/      # "Card X/Y" text and progress bar
├── pages/
│   ├── study/             # main study screen
│   └── about/             # about page
├── models/                # FlashcardData interface
├── data/                  # flashcards.data.ts
├── app.ts                 # root component: links and <router-outlet />
├── app.config.ts
└── app.routes.ts
```

## Getting started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm

### Installation

```bash
git clone <your-repo-url>
cd flashcards-app
npm install
```

### Development server

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically when you change a source file.

### Code scaffolding

```bash
ng generate component component-name
```

For the full list of schematics (components, directives, pipes...), run `ng generate --help`.

### Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory. The production build is optimized for performance.

### Running unit tests

```bash
ng test
```

Tests run with [Vitest](https://vitest.dev/).

### Running end-to-end tests

```bash
ng e2e
```

Angular CLI doesn't include an e2e framework by default, so you need to pick one first.

## Future improvements

- [ ] Add a form to create custom flashcards
- [ ] Move the session state (index, answer visibility) into a service so it survives page changes
- [ ] Persist cards with localStorage
- [ ] Categories and tags
- [ ] Shuffle card order
- [ ] Track which cards were answered correctly
- [ ] Dark mode

## What I learned

- Splitting a screen into small components that communicate with `@Input` and `@Output`
- Keeping components reusable by passing them data instead of letting them fetch it
- Managing state with signals and `computed`
- Single-page navigation with the Angular Router and lazy loading

## Resources

- [Angular documentation](https://angular.dev)
- [Angular CLI reference](https://angular.dev/tools/cli)
- [Angular Signals guide](https://angular.dev/guide/signals)
- [roadmap.sh Flash Cards project](https://roadmap.sh/projects/flash-cards)
