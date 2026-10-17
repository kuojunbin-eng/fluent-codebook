# Fluent Codebook

三語（繁體中文／Español／Français）00–99 數字轉碼與記憶訓練工具。

## 功能

- 00–99 中文圖像、Spanish、French 對照字典
- 中文圖像、發音鉤子、Boss 10 故事
- 可選擇全部、入門、進階或 Boss 數字進行自訂訓練
- 使用者可輸入自己的聯想，遮住題目後再核對標準轉碼表
- 翻卡複習、SM-2 間隔重複、學習進度與錯題本
- 每個西語／法語數字都有獨立語音檔，避免依賴瀏覽器錯誤的預設 voice
- 所有學習紀錄只儲存在使用者瀏覽器的 localStorage，不需要帳號或後端

## 開發

```bash
pnpm install
pnpm dev
```

檢查與建置：

```bash
pnpm check
pnpm build
```

## 專案結構

- `client/src/pages/Home.tsx`：主頁、字典、翻卡與自訂訓練流程
- `client/src/data/codebook.ts`：00–99 三語資料與 Boss 故事
- `client/src/data/audioPaths.ts`：200 個逐數字音檔的 URL 產生器
- `client/public/audio/`：西語與法語 00–99 獨立音檔
- `client/src/index.css`：品牌視覺與響應式版面

## GitHub Pages

本專案包含 `.github/workflows/deploy-pages.yml`。推送到 `main` 後會自動建置並發布到 GitHub Pages。Vite 的 `base` 會使用 `VITE_BASE_PATH`，因此子路徑下的音檔也能正常播放。

## 協作規則

請先閱讀 `AGENTS.md`。每次修改前先執行 `pnpm check`，完成一個可驗證功能後再提交。不要把使用者學習紀錄、秘密、`.env` 或 `dist/` 提交到 repository。
