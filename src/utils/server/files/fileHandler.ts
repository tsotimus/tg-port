import { type Options, type Files, type Fields, Formidable } from "formidable";
import { type NextApiRequest } from "next";

const getFileExtension = (filename: string) => {
  const ext = (/[^./\\]*$/.exec(filename) ?? [""])[0];
  return ext.toLowerCase();
};

type FormidablePromise = { fields: Fields; files: Files };

const formidablePromise = (
  req: NextApiRequest,
  opts: Options
): Promise<FormidablePromise> => {
  return new Promise((resolve, reject) => {
    const form = new Formidable(opts);
    const uploadPromises: Promise<void>[] = []; // Array to hold upload promises

    const fieldStore: Fields = {}; // Object to store fields
    const fileStore:Files = {}; // Object to store files

    form.on("error", (err) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err?.httpCode === 413) {
        reject(new Error("maxFileSize"));
      } else {
        reject(new Error("Unknown error: " + err));
      }
    });

    form.on("end", () => {
      Promise.all(uploadPromises)
        .then(() => resolve({ fields: fieldStore, files: fileStore })) // Resolve with fields and files
        .catch(reject); 
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(new Error("Body parser: " + err));
      Object.assign(fieldStore, fields); // Store fields in the object
      Object.assign(fileStore, files); // Store files in the object
    });
  });
};

const isOverSizeLimit = (size: number) => {
  if (size > 5 * 1024 * 1024) {
    return true;
  }
  return false;
};

const removeFileExtension = (filename: string) => {
  return filename.replace(/\.[^/.]+$/, "");
};

export {
  getFileExtension,
  formidablePromise,
  isOverSizeLimit,
  removeFileExtension,
};
