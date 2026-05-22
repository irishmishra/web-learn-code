import Editor from "@monaco-editor/react";
import { Play, Save } from "lucide-react";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const starter = {
  html: `<main class="card">
  <h1>Hello, CodeForge</h1>
  <p>Edit the tabs and run the preview.</p>
  <button id="cta">Launch</button>
</main>`,
  css: `body { min-height: 100vh; display: grid; place-items: center; font-family: Inter, sans-serif; background: #eef7ff; }
.card { padding: 32px; border-radius: 8px; background: white; box-shadow: 0 24px 80px rgba(16,24,39,.16); text-align: center; }
button { border: 0; border-radius: 8px; padding: 12px 18px; background: #0E7C7B; color: white; font-weight: 800; }`,
  javascript: `document.querySelector("#cta").addEventListener("click", () => {
  document.querySelector("p").textContent = "JavaScript is running.";
});`
};

export default function Playground() {
  const [tab, setTab] = useState("html");
  const [code, setCode] = useState(starter);
  const [consoleOutput, setConsoleOutput] = useState("Ready.");
  const srcDoc = useMemo(() => `<!doctype html><html><head><style>${code.css}</style></head><body>${code.html}<script>const log = console.log; console.log = (...args) => parent.postMessage({ type: "console", args }, "*");${code.javascript}</script></body></html>`, [code]);

  function saveSnippet() {
    localStorage.setItem("codeforge-snippet", JSON.stringify(code));
    toast.success("Snippet saved locally");
  }

  return (
    <main className="section">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-black uppercase text-ocean">Interactive coding playground</p><h1 className="text-4xl font-black">VS Code-style live editor</h1></div>
        <div className="flex gap-2"><button className="btn-secondary py-2" onClick={saveSnippet}><Save size={18} /> Save</button><button className="btn-primary py-2" onClick={() => setConsoleOutput("Preview refreshed.")}><Play size={18} /> Run</button></div>
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-glass dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 p-3 dark:border-slate-800">
          {["html", "css", "javascript", "python", "java", "cpp", "c", "csharp"].map((name) => <button key={name} className={`rounded-lg px-4 py-2 text-sm font-black ${tab === name ? "bg-ocean text-white" : "bg-slate-100 dark:bg-slate-800"}`} onClick={() => setTab(name)}>{name.toUpperCase()}</button>)}
        </div>
        <div className="grid min-h-[560px] lg:grid-cols-2">
          <Editor height="560px" theme="vs-dark" language={tab === "cpp" ? "cpp" : tab === "csharp" ? "csharp" : tab} value={code[tab] || `// ${tab.toUpperCase()} execution is routed through backend runners in production.`} onChange={(value) => setCode((prev) => ({ ...prev, [tab]: value || "" }))} />
          <div className="grid grid-rows-[1fr_140px]">
            <iframe className="h-full w-full bg-white" title="Live preview" sandbox="allow-scripts" srcDoc={srcDoc} />
            <pre className="overflow-auto border-t border-slate-200 bg-slate-950 p-4 font-mono text-sm text-green-300 dark:border-slate-800">{consoleOutput}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}
