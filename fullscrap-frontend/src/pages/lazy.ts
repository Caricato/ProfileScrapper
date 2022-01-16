import { lazy } from "react";

export const LazySeeker = lazy(() => import("./seeker/seeker"));
export const LazyResults = lazy(() => import("./results/results"));
