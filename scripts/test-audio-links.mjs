#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const root = resolve(getArg("--root", "dist/public"));
const baseUrl = getArg("--base-url", "");
const languages = ["es", "fr"];
const codes = Array.from({ length: 100 }, (_, index) => String(index).padStart(2, "0"));
const expected = languages.flatMap((language) => codes.map((code) => ({ language, code })));
const failures = [];

const manifestPath = resolve("client/src/data/audioPaths.ts");
if (!existsSync(manifestPath)) {
  failures.push(`找不到音檔索引：${manifestPath}`);
}

for (const { language, code } of expected) {
  const relativePath = join("audio", `${language}_${code}.mp3`);
  const localPath = join(root, relativePath);
  if (!existsSync(localPath)) {
    failures.push(`缺少檔案：${localPath}`);
  }

  if (baseUrl) {
    const url = new URL(relativePath.replaceAll("\\", "/"), baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
    try {
      const response = await fetch(url);
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok) {
        failures.push(`HTTP ${response.status}：${url}`);
      } else if (!contentType.toLowerCase().includes("audio/mpeg")) {
        failures.push(`Content-Type 不正確（${contentType}）：${url}`);
      }
    } catch (error) {
      failures.push(`無法載入 ${url}：${error.message}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`音檔功能測試失敗：${failures.length} 個問題`);
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`音檔功能測試通過：${expected.length} 個音檔（西語 100 + 法語 100）`);
if (baseUrl) console.log(`HTTP 載入驗證：${baseUrl}`);
