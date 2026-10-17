# AI Agent 協作指引

## 工作目標

Fluent Codebook 是一個前端優先的 React/Vite 學習工具，服務對象是想用中文圖像記憶 00–99 數字，並同時練習西語與法語發音的使用者。

## 修改前

1. 先讀 `README.md`、`client/src/pages/Home.tsx`、`client/src/data/codebook.ts`。
2. 確認是否要維持繁體中文 UI。
3. 若修改語音，必須使用 `audioPaths.ts` 的逐數字檔案，不要退回只設定 `speechSynthesis.lang` 的做法。

## 修改後

```bash
pnpm check
pnpm build
```

需要視覺修改時，使用瀏覽器檢查桌面與手機版；需要資料修改時，確認 00–99 仍然完整且沒有重複 code。

## 架構約束

- 前端在 `client/`；不要修改 `server/` 來實作 UI 功能。
- 學習資料存在瀏覽器 localStorage，不要新增未經要求的登入或資料庫。
- 音檔使用 `client/public/audio/`，路徑透過 `import.meta.env.BASE_URL` 建立，以支援 GitHub Pages 子路徑。
- 不要提交 `.env`、token、使用者資料或 build output。
- 優先保持現有的 premium editorial 視覺：深藍 hero、teal/coral/purple accent、充足留白與清楚的繁體中文排版。

## 建議 commit 格式

- `feat: ...` 新功能
- `fix: ...` 修正
- `content: ...` 轉碼資料或故事
- `chore: ...` 工具與部署
