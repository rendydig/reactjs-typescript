# React TypeScript Learning Project

A comprehensive learning project demonstrating modern React development with TypeScript, Redux Toolkit, RxJS, and shadcn/ui components.

## 🚀 Technologies

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management with less boilerplate
- **RxJS** - Reactive programming for async operations
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📚 Learning Concepts

### TypeScript Features
- **Type Annotations** - Explicit typing for variables and functions
- **Interfaces** - Define object shapes (User, CounterState, etc.)
- **Generics** - Type-safe Redux hooks
- **Type Inference** - Let TypeScript infer types automatically

### Redux Toolkit
- **Slices** - Combine reducers and actions in one place
- **createSlice** - Simplified Redux logic
- **Typed Hooks** - `useAppDispatch` and `useAppSelector`
- **Immer Integration** - Mutate state directly in reducers

### RxJS Integration
- **Observables** - Async data streams
- **Operators** - `filter`, `map`, `delay`, `switchMap`, `take`
- **Subjects** - Multicast observables
- **Custom Middleware** - Integrate RxJS with Redux

### React Patterns
- **Functional Components** - Modern React components
- **Hooks** - useState, useSelector, useDispatch
- **Component Composition** - Reusable UI components
- **Props & Types** - Type-safe component props

## 🛠️ Installation

```bash
# Install dependencies
yarn install
# or
npm install
```

## 🏃 Running the App

```bash
# Start development server
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── CounterCard.tsx  # Counter demo component
│   └── UserCard.tsx     # User management component
├── store/
│   ├── middleware/
│   │   └── rxjsMiddleware.ts  # RxJS integration
│   ├── slices/
│   │   ├── counterSlice.ts    # Counter state
│   │   └── userSlice.ts       # User state
│   ├── hooks.ts         # Typed Redux hooks
│   └── store.ts         # Redux store configuration
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Features Demonstrated

### Counter Card
- **Increment/Decrement** - Basic Redux actions
- **Increment by Amount** - Actions with payloads
- **Reset** - State reset functionality
- **Async Increment** - RxJS observable with 1s delay
- **History Tracking** - Array state management

### User Card
- **Add User** - Form handling with React state
- **Remove User** - Array filtering
- **Fetch Users** - RxJS async operation with 1.5s delay
- **Loading State** - UI feedback during async operations

## 🔍 Key Files to Study

1. **`src/store/store.ts`** - Redux store setup with middleware
2. **`src/store/slices/counterSlice.ts`** - Redux Toolkit slice example
3. **`src/store/middleware/rxjsMiddleware.ts`** - RxJS integration pattern
4. **`src/components/CounterCard.tsx`** - Component with Redux hooks
5. **`src/store/hooks.ts`** - Typed Redux hooks

## 💡 Learning Path

1. **Start with TypeScript basics** - Review interfaces and types
2. **Understand Redux Toolkit** - Study the slice files
3. **Explore RxJS** - Check the middleware implementation
4. **Component patterns** - See how components use hooks
5. **UI components** - Learn shadcn/ui component structure

## 🎨 Customization

### Adding New Redux Slices
1. Create a new slice in `src/store/slices/`
2. Add reducer to `src/store/store.ts`
3. Create actions and use in components

### Adding RxJS Epics
1. Add new observable in `src/store/middleware/rxjsMiddleware.ts`
2. Filter for your action type
3. Use RxJS operators to handle async logic

### Adding UI Components
1. Add shadcn/ui components to `src/components/ui/`
2. Use the `cn()` utility for className merging
3. Follow the existing component patterns

## 📖 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [RxJS Documentation](https://rxjs.dev/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚧 Next Steps

- Add routing with React Router
- Implement authentication flow
- Add API integration with real endpoints
- Create more complex RxJS operators
- Add unit tests with Vitest
- Implement error boundaries
- Add form validation with Zod

## 📝 License

MIT - Feel free to use this project for learning!
