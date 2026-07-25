const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const targets = [
  {
    file: path.join(root, "node_modules/i18next-ssg/dist/esm/config.js"),
    contents: `const FALLBACK_I18N = {
  defaultLocale: "en",
  locales: ["en", "es", "ca"],
};

function readI18n() {
  let i18n = process.env.NEXT_PUBLIC_I18N;
  if (typeof i18n === "string") {
    try {
      i18n = JSON.parse(i18n);
    } catch {
      i18n = undefined;
    }
  }
  if (!i18n && typeof window === "undefined") {
    try {
      i18n = require(require("path").resolve("./next-i18next.config.js"))?.i18n;
    } catch {
      // ignore
    }
  }
  return i18n ?? FALLBACK_I18N;
}

const i18n = readI18n();
export const locales = i18n?.locales ?? FALLBACK_I18N.locales;
export const defaultLocale = i18n?.defaultLocale ?? FALLBACK_I18N.defaultLocale;
`,
  },
  {
    file: path.join(root, "node_modules/i18next-ssg/dist/commonjs/config.js"),
    contents: `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLocale = exports.locales = void 0;
const FALLBACK_I18N = {
  defaultLocale: "en",
  locales: ["en", "es", "ca"],
};
function readI18n() {
  let i18n = process.env.NEXT_PUBLIC_I18N;
  if (typeof i18n === "string") {
    try {
      i18n = JSON.parse(i18n);
    } catch {
      i18n = undefined;
    }
  }
  if (!i18n && typeof window === "undefined") {
    try {
      i18n = require(require("path").resolve("./next-i18next.config.js"))?.i18n;
    } catch {
      // ignore
    }
  }
  return i18n ?? FALLBACK_I18N;
}
const i18n = readI18n();
exports.locales = i18n?.locales ?? FALLBACK_I18N.locales;
exports.defaultLocale = i18n?.defaultLocale ?? FALLBACK_I18N.defaultLocale;
`,
  },
];

for (const { file, contents } of targets) {
  if (!fs.existsSync(path.dirname(file))) {
    console.warn(`[patch-i18next-ssg] skip missing ${file}`);
    continue;
  }
  fs.writeFileSync(file, contents);
  console.log(`[patch-i18next-ssg] patched ${path.relative(root, file)}`);
}
