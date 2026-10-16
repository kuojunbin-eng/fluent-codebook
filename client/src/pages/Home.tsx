import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Copy,
  Filter,
  Flame,
  Grid3X3,
  Headphones,
  Languages,
  Lightbulb,
  Search,
  Shuffle,
  Sparkles,
  Target,
  Volume2,
  X,
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
        <LanguageLine label="ES" word={entry.esWord} cue={entry.esCue} language="es" onSpeak={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(entry.esWord))} />
        <LanguageLine label="FR" word={entry.frWord} cue={entry.frCue} language="fr" onSpeak={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(entry.frWord))} />
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

export default function Home() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<LanguageKey>("all");
  const [view, setView] = useState<ViewKey>("codebook");
  const [selectedCode, setSelectedCode] = useState("00");
  const [copied, setCopied] = useState(false);
  const selected = codebook.find((entry) => entry.code === selectedCode) ?? codebook[0];

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
