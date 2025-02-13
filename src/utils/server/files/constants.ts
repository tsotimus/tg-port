import { FEATURE_FLAGS } from "../features";

export const CLOUD_FOLDER_LOCATION = FEATURE_FLAGS.IS_PROD ? "assets/media" : "assets/dev-media" ;
export const DOWNLOAD_BUCKET = FEATURE_FLAGS.IS_PROD ? "my-portfolio-downloads-eu-2" : "dev-my-portfolio-downloads-eu-2"