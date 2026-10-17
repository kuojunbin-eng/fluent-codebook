# AI Agent 協作指引

## 專案目標

Fluent Codebook 是一個前端優先的 React/Vite 學習工具，服務想用中文圖像記憶 00–99 數字，並同時練習西班牙語與法語發音的使用者。介面預設使用繁體中文；資料、音檔與學習流程都必須保持三語一致。

## 開始工作前

1. 讀取 `README.md`、本檔案、`client/src/pages/Home.tsx`、`client/src/data/codebook.ts`。
2. 執行 `git status --short`，不要覆蓋其他 agent 尚未提交的修改。
3. 確認任務屬於哪一類：UI、資料、音檔、測試或部署；不要順手重構不相關程式。
4. 若修改語音，必須使用 `client/src/data/audioPaths.ts` 的逐數字檔案，不要退回只設定 `speechSynthesis.lang` 的做法。

## 標準開發流程

```bash
# 安裝與型別檢查
pnpm install
pnpm check

# 建置與音檔基本檢查
pnpm build
pnpm test:audio-links

# 若修改部署或音檔路徑，再做真正 HTTP 載入測試
pnpm preview --host 127.0.0.1 --port 4173
pnpm test:audio-links:http
```

`test:audio-links:http` 會檢查西語與法語各 00–99、共 200 個音檔是否能回傳 HTTP 200，且 `Content-Type` 是 `audio/mpeg`。GitHub Actions 每次 push 到 `main` 都會在發布 `gh-pages` 前執行同一個測試；測試失敗時不可發布。

視覺修改後，使用瀏覽器檢查桌面與手機版。資料修改後，確認 00–99 恰好 100 組、code 不重複，並確認西語／法語每組仍有對應音檔。

## 分支與提交

- 每個 agent 優先使用獨立分支，例如 `feat/audio-tests`、`fix/french-pronunciation`。
- 小而完整的修改才提交；不要把格式化全專案與功能修改混在一起。
- 建議 commit 格式：
  - `feat: ...` 新功能
  - `fix: ...` 修正
  - `test: ...` 測試
  - `content: ...` 轉碼資料或故事
  - `chore: ...` 工具與部署
- 推送前至少執行 `pnpm check && pnpm build && pnpm test:audio-links`。

## AI agent 協作範例

### 範例一：新增音檔測試

```bash
git switch -c test/audio-links
# 修改 scripts/test-audio-links.mjs 與 package.json
pnpm check
pnpm build
pnpm test:audio-links
git add scripts/test-audio-links.mjs package.json .github/workflows/deploy-pages.yml
git commit -m "test: verify Spanish and French audio links"
git push -u origin test/audio-links
```

完成後建立 Pull Request，描述測試範圍、執行結果與是否修改公開資產。

### 範例二：修改一組三語資料

1. 只修改 `client/src/data/codebook.ts` 中該組 code。
2. 保留 `code`、`zh`、`esWord`、`esCue`、`frWord`、`frCue` 欄位。
3. 若修改 `esWord` 或 `frWord`，同步更新 `client/public/audio/es_XX.mp3` 或 `fr_XX.mp3`，並確認音檔真的讀出新單字。
4. 執行 `pnpm check && pnpm build && pnpm test:audio-links`。

### 範例三：修改 UI 或互動流程

1. 先確認是否可以只修改 `client/src/pages/Home.tsx` 與 `client/src/index.css`。
2. 不要為了 UI 修改 `server/`、資料庫或加入登入系統。
3. 檢查鍵盤焦點、手機版排版、錯誤狀態與 localStorage 舊資料相容性。
4. 在 PR 描述附上修改前後截圖或明確說明無視覺變更。

### 範例四：其他 agent 接手既有 PR

```bash
git fetch origin
git switch <branch>
git status --short
pnpm check
pnpm test:audio-links
```

先閱讀該分支最近 5 個 commit 與 PR 描述，再修改；若發現與另一 agent 的工作衝突，保留雙方意圖並在 PR 留言，不要直接 reset 或 force push。

## 架構約束

- 前端程式在 `client/`；不要修改 `server/` 來實作 UI 功能。
- 學習資料存在瀏覽器 localStorage，不要新增未經要求的登入或資料庫。
- 音檔使用 `client/public/audio/`，路徑透過 `import.meta.env.BASE_URL` 建立，以支援 GitHub Pages 子路徑。
- 不要提交 `.env`、token、使用者資料或 `dist/` build output。
- 不要刪除既有 `Boss 10`、翻卡、SM-2、錯題本與自訂訓練功能，除非任務明確要求。
- 優先保持現有 premium editorial 視覺：深藍 hero、teal/coral/purple accent、充足留白與清楚的繁體中文排版。

## 完成定義

一項修改只有在以下條件都滿足時才算完成：

- `pnpm check` 通過。
- `pnpm build` 通過。
- `pnpm test:audio-links` 通過；若修改音檔 URL 或部署設定，也要通過 `pnpm test:audio-links:http`。
- GitHub Actions 綠燈，且沒有把秘密或使用者資料提交到 repository。
- PR 說明包含修改內容、測試指令與已知限制。
