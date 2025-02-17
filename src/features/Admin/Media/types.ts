export type GeneralMedia = {
  asset_id: string;
  public_id: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  pages: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: string;
  etag: string;
  created_by: {
    access_key: string;
  };
  uploaded_by: {
    access_key: string;
  };
};

export type GetGeneralMediaResponse = {
  data: Array<GeneralMedia>;
  meta: {
    page: number;
  };
};
