export const FEATURE_FLAGS = {
    IS_UNDER_CONSTRUCTION: process.env.IS_UNDER_CONSTRUCTION === "true",
    IS_OFFLINE_DEV: process.env.IS_OFFLINE_DEV === "true",
    IS_PROD: process.env.NODE_ENV === 'production'
}
