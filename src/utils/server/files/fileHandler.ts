import { Options, Files, Fields, Formidable } from "formidable";
import { NextApiRequest } from "next";

const getFileExtension = (filename: string) => {
  const ext = (/[^./\\]*$/.exec(filename) || [""])[0];
  return ext.toLowerCase();
};

type FormidablePromise = { fields: Fields; files: Files };

const formidablePromise = (
  req: NextApiRequest,
  opts: Options
): Promise<FormidablePromise> => {
  return new Promise(function (resolve, reject) {
    const form = new Formidable(opts);
    form.on("error", (err) => {
      if (err.httpCode === 413) {
        reject("maxFileSize");
      } else {
        reject(err);
      }
    });
    form.parse(req, function (err, fields, files) {
      if (err) return reject("Body parser: " + err);
      resolve({ fields: fields, files: files });
    });
  });
};

const isOverSizeLimit = (size: number) => {
  if (size > 5 * 1024 * 1024) {
    return true;
  }
  return false;
};

export { getFileExtension, formidablePromise, isOverSizeLimit };
