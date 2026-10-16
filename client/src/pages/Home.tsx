import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Copy,
  Filter,
  Flame,
  Grid3X3,
  Headphones,
  Languages,
  Lightbulb,
  Mic2,
  Pause,
  Play,
  Search,
  Shuffle,
  Sparkles,
  Target,
  Trophy,
  RotateCcw,
  Volume2,
  X,
  XCircle,
} from "lucide-react";
import { codebook, bossCodes, type CodebookEntry } from "../data/codebook";

const languageOptions = [
  { key: "all", label: "全部語言" },
  { key: "zh", label: "中文" },
  { key: "es", label: "Español" },
  { key: "fr", label: "Français" },
] as const;

type LanguageKey = (typeof languageOptions)[number]["key"];
type ViewKey = "codebook" | "boss";

type ReviewRecord = {
  seen: number;
  correct: number;
  wrong: number;
  streak: number;
  interval: number;
  ease: number;
  dueAt: number;
};

const emptyReview = (): ReviewRecord => ({ seen: 0, correct: 0, wrong: 0, streak: 0, interval: 0, ease: 2.5, dueAt: 0 });

function speakText(text: string, language: "es-ES" | "fr-FR") {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function gradeReview(previous: ReviewRecord, grade: "again" | "good") {
  const now = Date.now();
  if (grade === "again") return { ...previous, seen: previous.seen + 1, wrong: previous.wrong + 1, streak: 0, interval: 0, ease: Math.max(1.3, previous.ease - 0.2), dueAt: now + 10 * 60 * 1000 };
  const nextInterval = previous.interval === 0 ? 1 : previous.interval === 1 ? 3 : Math.max(1, Math.round(previous.interval * previous.ease));
  return { ...previous, seen: previous.seen + 1, correct: previous.correct + 1, streak: previous.streak + 1, interval: nextInterval, ease: Math.min(3.2, previous.ease + 0.08), dueAt: now + nextInterval * 24 * 60 * 60 * 1000 };
}

function scoreFor(entry: CodebookEntry, query: string) {
  const needle = query.toLowerCase().trim();
  if (!needle) return 0;
  if (entry.code === needle) return 100;
  if (entry.zh.toLowerCase() === needle) return 95;
  if (entry.esWord.toLowerCase() === needle || entry.frWord.toLowerCase() === needle) return 90;
  return [entry.code, entry.zh, entry.esWord, entry.esCue, entry.frWord, entry.frCue]
    .join(" ")
    .toLowerCase()
    .includes(needle)
    ? 50
    : 0;
}

function LanguageBadge({ language, label }: { language: "zh" | "es" | "fr"; label: string }) {
  return (
    <span className={`language-badge language-${language}`}>
      <span className="language-dot" />
      {label}
    </span>
  );
}

function Metric({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="metric">
      <div className="metric-value" style={{ color: accent }}>{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

function AppHeader({ onBossClick }: { onBossClick: () => void }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Fluent Codebook 首頁">
          <span className="brand-mark"><Sparkles size={16} strokeWidth={2.5} /></span>
          <span><strong>FLUENT</strong><em>CODEBOOK</em></span>
        </a>
        <nav className="header-nav" aria-label="主要導覽">
          <a className="active" href="#codebook">轉碼字典</a>
          <button onClick={onBossClick}>Boss 故事 <span className="nav-count">10</span></button>
          <a href="#study">翻卡複習</a>
          <a href="#method">怎麼記</a>
        </nav>
        <div className="header-status"><span className="status-dot" /> 離線可用</div>
      </div>
    </header>
  );
}

function CodeCard({ entry, selected, onSelect }: { entry: CodebookEntry; selected: boolean; onSelect: () => void }) {
  return (
    <button className={`code-card ${selected ? "selected" : ""} ${entry.boss ? "is-boss" : ""}`} onClick={onSelect} aria-pressed={selected}>
      <div className="card-topline">
        <span className="code-number">{entry.code}</span>
        {entry.boss ? <span className="boss-mini"><Flame size={11} /> BOSS</span> : <span className="card-tier">{entry.tier}</span>}
      </div>
      <div className="card-zh">{entry.zh}</div>
      <div className="card-langs">
        <span><b>ES</b>{entry.esWord}</span>
        <span><b>FR</b>{entry.frWord}</span>
      </div>
      <ChevronRight className="card-arrow" size={17} />
    </button>
  );
}

function LanguageLine({ label, word, cue, language, onSpeak }: { label: string; word: string; cue: string; language: "zh" | "es" | "fr"; onSpeak: () => void }) {
  return (
    <div className={`language-line language-line-${language}`}>
      <div className="line-label">{label}</div>
      <div className="line-content">
        <div className="line-word">{word}</div>
        <div className="line-cue">{cue}</div>
      </div>
      {language !== "zh" && <button className="speak-button" onClick={onSpeak} aria-label={`播放 ${word}`}><Volume2 size={16} /></button>}
    </div>
  );
}

function DetailPanel({ entry, onCopy }: { entry: CodebookEntry; onCopy: (text: string) => void }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <aside className="detail-panel" id="detail">
      <div className="detail-topline">
        <span className="detail-kicker"><Target size={14} /> 目前選擇</span>
        <button className="copy-button" onClick={() => onCopy(`${entry.code}｜${entry.zh}｜${entry.esWord}｜${entry.frWord}`)}><Copy size={14} /> 複製</button>
      </div>
      <div className="detail-code-row">
        <div className="detail-code">{entry.code}</div>
        <div>
          <div className="detail-code-label">NUMBER CODE</div>
          <h2>{entry.zh}</h2>
        </div>
        {entry.boss && <div className="detail-boss"><Flame size={14} /> Boss</div>}
      </div>
      <div className="detail-divider" />
      <div className="detail-section-label">三語對照與聲音鉤子</div>
      <div className="language-lines">
        <LanguageLine label="ZH" word={entry.zh} cue="先把畫面固定下來：物品、人物或一個動作。" language="zh" onSpeak={() => {}} />
        <LanguageLine label="ES" word={entry.esWord} cue={entry.esCue} language="es" onSpeak={() => speakText(entry.esWord, "es-ES")} />
        <LanguageLine label="FR" word={entry.frWord} cue={entry.frCue} language="fr" onSpeak={() => speakText(entry.frWord, "fr-FR")} />
      </div>
      {entry.boss ? (
        <div className="boss-detail">
          <div className="boss-detail-title"><Flame size={16} /> {entry.boss.label}</div>
          <p>{entry.boss.reason}</p>
          <button className="story-toggle" onClick={() => setRevealed(!revealed)}>
            <BookOpen size={15} /> {revealed ? "收起專屬故事" : "打開專屬記憶故事"} <ChevronRight size={15} className={revealed ? "rotate-90" : ""} />
          </button>
          {revealed && <div className="story-copy">{entry.boss.story}</div>}
        </div>
      ) : (
        <div className="memory-tip"><Lightbulb size={16} /><span><strong>記憶動作：</strong>先說出中文圖像，再把 ES／FR 的聲音鉤子接到同一個畫面。</span></div>
      )}
    </aside>
  );
}

function StudyPanel({ entry, record, onGrade, onNext }: { entry: CodebookEntry; record: ReviewRecord; onGrade: (grade: "again" | "good") => void; onNext: () => void }) {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => setFlipped(false), [entry.code]);
  return (
    <section className="study-panel" id="study">
      <div className="study-heading"><div><div className="section-kicker">03 / FLASH REVIEW</div><h2>翻卡複習・讓答案晚一點出現</h2><p>先看數字和畫面，心裡說出三語答案，再翻卡核對。按「再來一次」或「記住了」，系統會自動安排下一次複習。</p></div><div className="study-streak"><Trophy size={16} /><strong>{record.streak}</strong><span>連續答對</span></div></div>
      <div className="study-layout">
        <div className={`flashcard ${flipped ? "is-flipped" : ""}`} onClick={() => setFlipped(!flipped)} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setFlipped(!flipped)}>
          <div className="flashcard-face flashcard-front"><div className="flashcard-tag">NUMBER PROMPT <span>點擊翻面</span></div><div className="flashcard-number">{entry.code}</div><div className="flashcard-image-hint">{entry.zh.slice(0, 1)}<span>⋯</span></div><div className="flashcard-footer"><span>先說出中文圖像</span><span><RotateCcw size={13} /> 翻卡</span></div></div>
          <div className="flashcard-face flashcard-back"><div className="flashcard-tag">ANSWER CHECK <span>再想一次</span></div><div className="flash-answer-title">{entry.zh}</div><div className="flash-answer-lines"><div><b>ES</b>{entry.esWord}</div><div><b>FR</b>{entry.frWord}</div></div><div className="flashcard-footer"><span>三語答案已揭曉</span><span><RotateCcw size={13} /> 翻回</span></div></div>
        </div>
        <div className="study-controls"><div className="study-control-copy"><Brain size={18} /><div><strong>{flipped ? "答案核對完成？" : "準備好開始了嗎？"}</strong><span>{flipped ? "依照回想難度，選擇下一步。" : "不要偷看，先把聲音和畫面說出來。"}</span></div></div><div className="grade-buttons"><button className="grade-again" onClick={() => { setFlipped(true); onGrade("again"); }}><XCircle size={17} /><span><b>再來一次</b><small>10 分鐘後</small></span></button><button className="grade-good" onClick={() => { setFlipped(true); onGrade("good"); }}><CheckCircle2 size={17} /><span><b>記住了</b><small>{record.interval === 0 ? "明天" : `約 ${record.interval} 天後`}</small></span></button></div><button className="next-card-button" onClick={onNext}>下一張待複習卡 <ChevronRight size={16} /></button></div>
      </div>
    </section>
  );
}

function ProgressPanel({ records, dueCount, wrongCodes, onStudyWrong }: { records: Record<string, ReviewRecord>; dueCount: number; wrongCodes: string[]; onStudyWrong: (code: string) => void }) {
  const studied = Object.values(records).filter((record) => record.seen > 0);
  const totalSeen = studied.reduce((sum, record) => sum + record.seen, 0);
  const totalCorrect = studied.reduce((sum, record) => sum + record.correct, 0);
  const accuracy = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) : 0;
  const bestStreak = studied.reduce((best, record) => Math.max(best, record.streak), 0);
  return <section className="progress-panel container" id="progress"><div className="progress-header"><div><div className="section-kicker">04 / YOUR MEMORY MAP</div><h2>你的複習進度</h2><p>每一次翻卡都會保存在這台裝置，方便你回來接著練。</p></div><div className="progress-icon"><BarChart3 size={22} /></div></div><div className="progress-grid"><div className="progress-stat"><span>整體正確率</span><strong>{accuracy}%</strong><div className="progress-bar"><i style={{ width: `${accuracy}%` }} /></div></div><div className="progress-stat"><span>已練習卡片</span><strong>{studied.length}<small> / 100</small></strong><div className="progress-bar purple"><i style={{ width: `${studied.length}%` }} /></div></div><div className="progress-stat"><span>待複習</span><strong>{dueCount}</strong><div className="progress-caption">SM-2 排程中</div></div><div className="progress-stat"><span>目前最高連勝</span><strong>{bestStreak}</strong><div className="progress-caption">張連續答對</div></div></div><div className="mistake-row"><div><div className="mistake-title"><AlertCircle size={15} /> 個人化錯題本 <span>{wrongCodes.length} 張</span></div><p>按「再練這張」直接把卡片帶回翻卡複習。</p></div><div className="mistake-codes">{wrongCodes.slice(0, 8).map((code) => <button key={code} onClick={() => onStudyWrong(code)}>{code}</button>)}{wrongCodes.length > 8 && <span>+{wrongCodes.length - 8}</span>}</div></div></section>;
}

function PronunciationPanel({ onPlayWord }: { onPlayWord: (word: string, language: "es-ES" | "fr-FR") => void }) {
  const [playing, setPlaying] = useState<"es" | "fr" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAtlas = (language: "es" | "fr") => {
    audioRef.current?.pause();
    const source = language === "fr" ? "/manus-storage/french_numbers_00_99_7de46d94.wav" : "/manus-storage/spanish_numbers_00_19_d7896c44.wav";
    const audio = new Audio(source);
    audioRef.current = audio;
    const words = codebook.map((entry) => language === "es" ? entry.esWord : entry.frWord).join(". ");
    setPlaying(language);
    audio.onended = () => setPlaying(null);
    audio.onerror = () => { setPlaying(null); onPlayWord(words, language === "es" ? "es-ES" : "fr-FR"); };
    audio.play().catch(() => { setPlaying(null); onPlayWord(words, language === "es" ? "es-ES" : "fr-FR"); });
  };
  return <section className="pronunciation-panel container"><div className="pronunciation-copy"><div className="section-kicker">05 / LISTENING ROOM</div><h2>聽見每一組數字的節奏</h2><p>法語提供完整 00–99 真人音檔；西語提供 00–19 真人音檔，其餘數字由西語語系原生語音即時朗讀。</p></div><div className="pronunciation-actions"><button className="pronunciation-button es" onClick={() => playAtlas("es")}>{playing === "es" ? <Pause size={17} /> : <Play size={17} />}<span><b>Español 00–19</b><small>{playing === "es" ? "正在播放真人音檔…" : "播放西語真人音檔"}</small></span></button><button className="pronunciation-button fr" onClick={() => playAtlas("fr")}>{playing === "fr" ? <Pause size={17} /> : <Play size={17} />}<span><b>Français 00–99</b><small>{playing === "fr" ? "正在播放真人音檔…" : "播放完整法語真人音檔"}</small></span></button><div className="voice-note"><Mic2 size={15} /> 點擊卡片右側喇叭，單獨播放該組數字</div></div></section>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<LanguageKey>("all");
  const [view, setView] = useState<ViewKey>("codebook");
  const [selectedCode, setSelectedCode] = useState("00");
  const [copied, setCopied] = useState(false);
  const [reviewRecords, setReviewRecords] = useState<Record<string, ReviewRecord>>(() => {
    try { return JSON.parse(localStorage.getItem("fluent-codebook-review") || "{}"); } catch { return {}; }
  });
  const selected = codebook.find((entry) => entry.code === selectedCode) ?? codebook[0];
  const selectedRecord = reviewRecords[selected.code] ?? emptyReview();
  const wrongCodes = codebook.filter((entry) => (reviewRecords[entry.code]?.wrong ?? 0) > (reviewRecords[entry.code]?.correct ?? 0)).map((entry) => entry.code);
  const dueCount = codebook.filter((entry) => { const dueAt = reviewRecords[entry.code]?.dueAt ?? 0; return dueAt > 0 && dueAt <= Date.now(); }).length;

  useEffect(() => { localStorage.setItem("fluent-codebook-review", JSON.stringify(reviewRecords)); }, [reviewRecords]);

  const gradeSelected = (grade: "again" | "good") => {
    setReviewRecords((current) => ({ ...current, [selected.code]: gradeReview(current[selected.code] ?? emptyReview(), grade) }));
  };

  const goNextDue = () => {
    const next = codebook.find((entry) => (reviewRecords[entry.code]?.dueAt ?? 0) <= Date.now() && entry.code !== selected.code) ?? codebook.find((entry) => entry.code !== selected.code) ?? codebook[0];
    setSelectedCode(next.code);
    document.getElementById("study")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const studyWrong = (code: string) => {
    setSelectedCode(code);
    document.getElementById("study")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const filtered = useMemo(() => {
    const pool = view === "boss" ? codebook.filter((entry) => bossCodes.includes(entry.code)) : codebook;
    return pool
      .filter((entry) => {
        if (!query.trim()) return true;
        if (language === "zh") return `${entry.code} ${entry.zh}`.toLowerCase().includes(query.toLowerCase());
        if (language === "es") return `${entry.code} ${entry.esWord} ${entry.esCue}`.toLowerCase().includes(query.toLowerCase());
        if (language === "fr") return `${entry.code} ${entry.frWord} ${entry.frCue}`.toLowerCase().includes(query.toLowerCase());
        return scoreFor(entry, query) > 0;
      })
      .sort((a, b) => scoreFor(b, query) - scoreFor(a, query));
  }, [language, query, view]);

  const pickRandom = () => {
    const pool = view === "boss" ? codebook.filter((entry) => entry.boss) : codebook;
    const next = pool[Math.floor(Math.random() * pool.length)];
    setSelectedCode(next.code);
    document.getElementById("detail")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const copyText = async (text: string) => {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const jumpToBoss = () => {
    setView("boss");
    setSelectedCode("02");
    window.setTimeout(() => document.getElementById("codebook")?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  return (
    <div className="app-shell" id="top">
      <AppHeader onBossClick={jumpToBoss} />
      <main>
        <section className="hero-section">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> MEMORY LAB / 00—99</div>
              <h1>把數字變成<br /><span>腦中看得見的字。</span></h1>
              <p>一套可以搜尋、朗讀、串故事的三語數字轉碼表。先抓住中文圖像，再用 Español 與 Français 的聲音鉤子，讓 00–99 變成真正能反推的記憶。</p>
              <div className="hero-actions">
                <a className="primary-cta" href="#codebook">開始探索 <ArrowUpRight size={17} /></a>
                <button className="secondary-cta" onClick={pickRandom}><Shuffle size={16} /> 隨機抽一張</button>
              </div>
            </div>
            <div className="hero-visual" aria-label="三語數字轉碼示意">
              <div className="visual-card visual-card-back"><span>ES</span><strong>dos</strong><small>兩顆豆子一起跳舞</small></div>
              <div className="visual-card visual-card-main"><div className="visual-card-top"><span>02</span><span className="visual-live"><span /> LIVE CODE</span></div><strong>趙靈兒</strong><small>中文圖像 → 聲音 → 故事</small><div className="visual-languages"><span>dos</span><i>·</i><span>deux</span></div></div>
              <div className="visual-note"><Sparkles size={13} /> 先畫面，後聲音</div>
            </div>
          </div>
          <div className="hero-strip"><span>三語記憶系統</span><i /> <span>100 組固定圖像</span><i /> <span>10 個 Boss 故事</span><i /> <span>聲音鉤子已整理</span></div>
        </section>

        <section className="stats-section container">
          <Metric value="100" label="組固定圖像" accent="#16b6a5" />
          <Metric value="3" label="種語言路徑" accent="#f28b53" />
          <Metric value="10" label="Boss 易混淆數字" accent="#6b5dd3" />
          <div className="stats-note"><Headphones size={17} /><span>點擊 ES / FR 卡片上的喇叭，直接聽出聲音差異。</span></div>
        </section>
        <PronunciationPanel onPlayWord={speakText} />

        <section className="workspace container" id="codebook">
          <div className="section-heading">
            <div><div className="section-kicker">01 / CODEBOOK</div><h2>你的 00–99 轉碼字典</h2><p>搜尋數字、中文圖像，或直接輸入西／法文單字。點卡片查看完整的記憶路徑。</p></div>
            <div className="view-switch" role="tablist" aria-label="檢視模式">
              <button className={view === "codebook" ? "active" : ""} onClick={() => setView("codebook")}><Grid3X3 size={15} /> 全部 00–99</button>
              <button className={view === "boss" ? "active" : ""} onClick={() => { setView("boss"); setSelectedCode("02"); }}><Flame size={15} /> Boss 10</button>
            </div>
          </div>
          <div className="tool-row">
            <label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋 02、趙靈兒、dos、deux…" /><kbd>⌘ K</kbd>{query && <button className="clear-search" onClick={() => setQuery("")} aria-label="清除搜尋"><X size={15} /></button>}</label>
            <div className="language-filter"><Filter size={15} /><span>顯示</span>{languageOptions.map((option) => <button key={option.key} className={language === option.key ? "active" : ""} onClick={() => setLanguage(option.key)}>{option.label}</button>)}</div>
            <button className="random-button" onClick={pickRandom}><Shuffle size={15} /> 抽一張</button>
          </div>
          <div className="workspace-grid">
            <div className="cards-column">
              <div className="result-meta"><span><strong>{filtered.length}</strong> 個結果</span><span className="result-hint">{view === "boss" ? "只顯示最容易混淆的 10 組" : "按數字順序排列"}</span></div>
              <div className="code-grid">
                {filtered.map((entry) => <CodeCard key={entry.code} entry={entry} selected={selectedCode === entry.code} onSelect={() => { setSelectedCode(entry.code); window.setTimeout(() => document.getElementById("detail")?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 0); }} />)}
              </div>
              {filtered.length === 0 && <div className="empty-state"><CircleHelp size={20} /><strong>找不到這個鉤子</strong><span>換個數字或試試中文圖像、Spanish／French 單字。</span></div>}
            </div>
            <DetailPanel entry={selected} onCopy={copyText} />
          </div>
        </section>

        <StudyPanel entry={selected} record={selectedRecord} onGrade={gradeSelected} onNext={goNextDue} />
        <ProgressPanel records={reviewRecords} dueCount={dueCount} wrongCodes={wrongCodes} onStudyWrong={studyWrong} />

        <section className="method-section container" id="method">
          <div className="method-intro"><div className="section-kicker">02 / METHOD</div><h2>三步，把聲音變成畫面。</h2><p>不要背抽象的單字。每一次複習，都讓三種線索在同一個腦內場景碰面。</p><a href="#codebook" className="method-link">回到轉碼字典 <ArrowUpRight size={16} /></a></div>
          <div className="method-steps">
            <div className="method-step"><span>01</span><div className="step-icon teal"><Target size={18} /></div><h3>先固定圖像</h3><p>看到 02，先想「趙靈兒」的動作與顏色，不急著翻答案。</p></div>
            <div className="method-step"><span>02</span><div className="step-icon coral"><Languages size={18} /></div><h3>接上聲音</h3><p>把 dos / deux 的開頭、節奏或諧音，掛回同一張畫面。</p></div>
            <div className="method-step"><span>03</span><div className="step-icon purple"><BookOpen size={18} /></div><h3>串成故事</h3><p>再把 2–3 張卡片串成有碰撞、有動作的荒謬短片。</p></div>
          </div>
        </section>

        <footer className="site-footer container"><div className="footer-brand"><span className="brand-mark"><Sparkles size={14} /></span> Fluent Codebook</div><div>資料基於 Fluent AI 的中文 00–99 圖像表，西／法文為聲音聯想輔助，不等同標準發音教材。</div><div className="footer-right">{copied ? <><Check size={14} /> 已複製</> : "繁體中文介面"}</div></footer>
      </main>
    </div>
  );
}
