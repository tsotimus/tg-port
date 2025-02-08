import { FEATURE_FLAGS } from "../features";

export const FOLDER_LOCATION = FEATURE_FLAGS.IS_PROD ? "assets/media" : "assets/dev-media" ;