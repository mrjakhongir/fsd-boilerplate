// Purpose of shared/config/features.ts
// The features.ts file is used to define feature flags — essentially toggles that let you enable or disable specific parts of your application without removing code.
// It acts as a centralized control panel for app behavior.

export const FEATURES = {
  ENABLE_AUTH: true,
  ENABLE_BETA_DASHBOARD: false,
  ENABLE_MAINTENANCE_MODE: false,
};

// usage
// import { FEATURES } from "@/shared/config/features";

// if (FEATURES.ENABLE_AUTH) {
//   showLoginButton();
// }

// return (
//   <>{FEATURES.ENABLE_BETA_DASHBOARD ? <NewDashboard /> : <OldDashboard />}</>
// );
