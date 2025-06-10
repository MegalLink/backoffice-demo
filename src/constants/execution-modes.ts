export const EXECUTION_MODES = {
  ON_DEMAND: "on-demand",
  REAL_TIME: "real-time",
} as const;

export const API_TYPES = {
  ON_DEMAND: "onDemand",
  SCHEDULED: "scheduled",
} as const;

export const ENDPOINTS = {
  ON_DEMAND: "/webhook/reports",
  SCHEDULE: "/webhook/schedule",
} as const;

export type ExecutionMode =
  (typeof EXECUTION_MODES)[keyof typeof EXECUTION_MODES];
export type ApiType = (typeof API_TYPES)[keyof typeof API_TYPES];
