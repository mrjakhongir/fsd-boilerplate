# Please read me before you start messy everything

## SHARED

**Key Rules:**

- No imports from upper layers
- Pure, reusable code
- No business logic
- Example: A `<Button>` component doesn't know about users or orders

```
shared/
├── ui/                  # Reusable UI components
├── lib/                 # Utility functions and helpers
├── api/                 # API client configuration
├── config/              # Application configuration
├── types/               # Common TypeScript types
├── assets/              # Static files
├── hooks/               # Reusable React hooks
├── constants/           # Application constants
├── styles/              # Shared styles (mixins, variables, themes)
├── utils/               # Pure utility functions
├── hoc/                 # Higher-Order Components
├── context/             # Shared React contexts
├── validation/          # Validation schemas and rules
└── store/               # Shared Zustand store utilities
```

### 1. **ui/** - Reusable UI Components

Pure, generic UI components with **no business logic**.

```
shared/ui/
├── Button/
│   ├── Button.tsx
│   ├── Button.module.scss
│   ├── Button.types.ts
│   └── index.ts
├── Input/
└── index.ts
```

- Atoms (Base Components) - button, input, icon, spinner
- Molecules (Combined UI Blocks) - card, modal, dropdown, pagination
- Layout Components - FlexContainer, Grid, Section, Sidebar
- Typography - Text, Title, Heading, Label

### 2. **lib/** - Utility Functions & Helpers

```
shared/lib/
├── date/
│ ├── format-date.ts
│ ├── get-relative-time.ts
│ └── index.ts
├── string/
│ ├── truncate.ts
│ ├── capitalize.ts
│ ├── slugify.ts
│ └── index.ts
├── number/
│ ├── format-currency.ts
│ ├── format-number.ts
│ └── index.ts
├── array/
│ ├── group-by.ts
│ ├── chunk.ts
│ └── index.ts
├── object/
│ ├── deep-clone.ts
│ ├── is-empty.ts
│ └── index.ts
├── url/
│ ├── build-query-string.ts
│ ├── parse-url.ts
│ └── index.ts
└── storage/
├── local-storage.ts
├── session-storage.ts
└── index.ts
```

This layer should contain pure utility functions and helpers that:

✔ Have no side effects (ideally)
✔ Are framework-agnostic (not tied to React, Chakra, Zustand, etc.)
✔ Are reusable across any feature, widget, page, or even external project

### 3. **api/** - API Client Configuration

Base API setup, interceptors, and HTTP client configuration.

```
shared/api/
├── client/
│   ├── axios.ts           # Base axios instance
│   └── index.ts
├── interceptors/
│   ├── authInterceptor.ts
│   ├── errorInterceptor.ts
│   └── index.ts
├── types/
│   ├── response.types.ts
│   ├── error.types.ts
│   └── index.ts
└── index.ts
```

- Base HTTP client setup
- Request/response interceptors
- Error handling configuration
- NOT specific API endpoints (those go in entities/features)

### 4. **config/** - Application Configuration

Environment variables, feature flags, and app settings.

```
shared/config/
├── env.ts              # Environment variables
├── routes.ts           # Route paths constants
├── features.ts         # Feature flags
├── theme.ts            # Theme configuration
├── api.config.ts       # API endpoints base URLs
└── index.ts
```

- Centralized configuration
- Type-safe env variables
- Constants that affect entire app

## 5. **types/** - Common TypeScript Types

Shared type definitions used across multiple layers.

```
shared/types/
├── common.types.ts      # Generic types (ID, Timestamp, etc.)
├── api.types.ts         # Common API types
├── pagination.types.ts
├── filter.types.ts
├── sort.types.ts
├── entity.types.ts      # Base entity interfaces
└── index.ts
```

## ENTITIES

**Key Characteristics:**

- Each entity is a **business concept** (User, Product, Order, Comment)
- Contains data fetching, state management, and display
- **Cannot import from other entities** (no cross-entity dependencies)
- Example: `entities/user` knows how to fetch, store, and display user data

**When to use:**

- When you need to display or work with a business object
- Generic CRUD operations for a specific entity

### 2. **entities/** - Business Entities

Represents **real-world business objects** and their data.

```

entities/
├── user/
│ ├── model/ # Zustand store for user state
│ │ └── userStore.ts
│ ├── api/ # User-related API calls
│ │ └── userApi.ts
│ ├── ui/ # User display components (UserCard, UserAvatar)
│ │ └── UserCard.tsx
│ ├── lib/ # User-related helpers
│ │ └── formatUserName.ts
│ └── index.ts # Public API
├── product/
│ ├── model/
│ ├── api/
│ └── ui/
└── order/
├── model/
├── api/
└── ui/

```

## FEATURES

### 3. **features/** - User Interactions

Represents **actions users can perform** - business use cases.

```

features/
├── auth/
│ ├── login/
│ │ ├── model/ # Login state (Zustand)
│ │ ├── ui/ # LoginForm component
│ │ │ └── LoginForm.tsx
│ │ ├── api/ # Login API calls
│ │ └── index.ts
│ └── logout/
│ ├── ui/
│ │ └── LogoutButton.tsx
│ └── index.ts
├── add-to-cart/
│ ├── model/
│ ├── ui/
│ │ └── AddToCartButton.tsx
│ └── index.ts
└── edit-profile/
├── model/
├── ui/
│ └── EditProfileForm.tsx
└── index.ts

```

**Key Characteristics:**

- Each feature is a **user action** (login, add to cart, like post)
- Can import from `shared` and `entities`
- **Cannot import from other features** (features are isolated)
- Usually contains UI + logic for one specific action

**When to use:**

- When implementing a specific user capability
- Interactive actions that change app state
- Example: "Add to Cart" button with its logic

## WIDGETS

### 4. **widgets/** - Composite Blocks

**Large UI blocks** composed of entities and features.

```

widgets/
├── header/
│ ├── ui/
│ │ └── Header.tsx # Uses LogoutButton, UserAvatar
│ ├── model/
│ └── index.ts
├── product-list/
│ ├── ui/
│ │ └── ProductList.tsx # Uses ProductCard + AddToCartButton
│ └── index.ts
└── sidebar/
├── ui/
│ └── Sidebar.tsx
└── index.ts

```

**Key Characteristics:**

- **Compositional layer** - assembles smaller parts
- Can import from `shared`, `entities`, and `features`
- Usually represents a section of the page (header, sidebar, feed)
- Contains complex UI logic and composition

**When to use:**

- When you need to combine multiple features/entities
- Page sections that are reused across routes
- Example: Header that shows user info + logout button + navigation

## PAGES

### 5. **pages/** - Application Routes

Each folder = one route/page in your app.

```

pages/
├── home/
│ ├── ui/
│ │ └── HomePage.tsx
│ └── index.ts
├── product-details/
│ ├── ui/
│ │ └── ProductDetailsPage.tsx
│ ├── model/
│ └── index.ts
└── profile/
├── ui/
│ └── ProfilePage.tsx
└── index.ts

```

**Key Characteristics:**

- Can import from **all lower layers**
- Assembles widgets, features, entities for a complete page
- Connected to routing (React Router, Tanstack Router)
- Contains page-level logic and layout

**When to use:**

- For each route in your application
- Example: `/products/:id` → `pages/product-details`

## APP

### 6. **app/** - Application Entry Point

The highest layer - initializes and configures the entire app.

```

app/
├── providers/ # Context providers, wrappers
│ ├── RouterProvider.tsx
│ └── ThemeProvider.tsx
├── styles/ # Global styles
│ └── global.scss
├── store/ # Root Zustand store composition
│ └── rootStore.ts
└── index.tsx # App entry point

```

**Key Characteristics:**

- App initialization and configuration
- Global providers (Router, Theme, Auth)
- Global styles
- Cannot be imported by other layers

## 📐 Internal Slice Structure (Segments)

Each slice (entity/feature/widget) can have these segments:

```

slice-name/
├── ui/ # React components
├── model/ # State management (Zustand stores)
├── api/ # API requests
├── lib/ # Utilities specific to this slice
├── config/ # Configuration for this slice
├── types/ # TypeScript types for this slice
└── index.ts # Public API (what others can import)

```

```

```

```

```

```

```
