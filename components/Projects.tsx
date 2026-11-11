"use client";
import { useState } from "react";
import { projects, categories, shotSlugs, slugify, offline, type Project } from "@/lib/data";
import Tilt from "./Tilt";

function Wrap({ off, href, className, children }: { off: boolean; href: string; className: string; children: React.ReactNode }) {
  if (off) return <div className={`${className} cursor-default opacity-80 grayscale-[40%]`}>{children}</div>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Card({ p, i }: { p: Project; i: number }) {
  const slug = slugify(p.name);
  const local = shotSlugs.has(slug);
  const [failed, setFailed] = useState(false);
  // Local screenshot when available, otherwise a network screenshot (thum.io).
  const shot = local ? `/projects/${slug}.jpg` : `https://image.thum.io/get/width/800/crop/1600/${p.url}`;
  const showImg = local || !failed;
  const isOff = offline.has(p.name);
  const host = new URL(p.url).hostname.replace("www.", "");
  return (
    <Tilt className="rounded-2xl">
      <Wrap off={isOff} href={p.url}
        className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/50"
      >
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#12203d] to-[#0a1428]">
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-light text-cyan-300/20">{p.name[0]}</div>
          <span className="absolute left-4 top-3 z-10 rounded bg-[#070d1a]/70 px-1.5 text-xs text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
          {!local && !failed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={shot} alt="" className="hidden" onError={() => setFailed(true)} />
          )}
          {showImg && (
            <div
              className="absolute inset-0 bg-top [background-size:100%_auto] [transition:background-position_4s_ease-in-out] group-hover:[background-position:center_bottom]"
              style={{ backgroundImage: `url(${shot})` }}
            />
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium text-white">{p.name}</h3>
            <span className="rounded-full border border-cyan-300/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-300">{p.cat}</span>
          </div>
          {p.desc && <p className="mt-2 line-clamp-3 text-sm text-slate-400">{p.desc}</p>}
          <p className="mt-2 text-sm text-slate-500">{isOff ? <span className="text-amber-300">Site currently offline</span> : <>{host} ↗</>}</p>
        </div>
      </Wrap>
    </Tilt>
  );
}

export default function Projects() {
  const [cat, setCat] = useState("All");
  const [limit, setLimit] = useState(12);
  const list = projects.filter((p) => cat === "All" || p.cat === cat);
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCat(c);
              setLimit(12);
            }}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-cyan-300 bg-cyan-300 text-[#070d1a]" : "border-white/15 text-slate-300 hover:border-cyan-300/50"}`}
          >
            {c} <span className="opacity-60">{c === "All" ? projects.length : projects.filter((p) => p.cat === c).length}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, limit).map((p, i) => (
          <Card key={p.url} p={p} i={i} />
        ))}
      </div>
      {limit < list.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setLimit(limit + 12)}
            className="rounded-full border border-cyan-300/50 px-6 py-2.5 text-sm text-cyan-300 hover:bg-cyan-300 hover:text-[#070d1a]"
          >
            Load more missions ({list.length - limit})
          </button>
        </div>
      )}
    </>
  );
}
