import fs from 'node:fs';
import path from 'node:path';

/* The CV buttons only render when the PDF actually exists in /public.
   Drop the file in with this exact name and they appear on the next build;
   until then there is no dead link pointing at a 404. */
export const CV_URL = '/santiago-castillo-cv.pdf';
export const hasCV = fs.existsSync(path.join(process.cwd(), 'public', CV_URL.slice(1)));
