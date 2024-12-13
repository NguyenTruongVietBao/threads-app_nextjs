// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers
// Copy paste (be careful with imports)

import { generateReactHelpers } from "@uploadthing/react";
import { OurFileRouter } from "@/api/uploadthing/core";
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
