// /utils/loaders.ts
import { parseAsString, createLoader } from 'nuqs/server';

// Define the search parameters you want to handle
export const mediaSearchParams = {
  tab: parseAsString.withDefault("general"), // Default to 'general' if no 'tab' is provided
};

// Create the loader for these parameters
export const loadMediaSearchParams = createLoader(mediaSearchParams);