// 🧱 shared/types/ — Centralized Type Definitions

// This folder contains reusable TypeScript types and interfaces that are framework-agnostic and not tied to any specific feature or entity.
//  These act as building blocks for domain models, API responses, UI layers, and more.

// ✅ Why This Folder Exists

// Consistency — Pagination, filtering, and entity shapes are unified across features

// Avoid Duplication — Instead of redefining { page: number; limit: number } everywhere

// API & UI Alignment — Both client logic and rendering components can consume same types

// Better Autocomplete & Validation — TS can infer structure globally
