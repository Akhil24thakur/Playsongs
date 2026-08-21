const fs = require("fs");
const path = require("path");

const BASE = "https://playsongs-six.vercel.app";

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function toAbsUrl(rel) {
  return BASE + "/" + String(rel).split("/").map(encodeURIComponent).join("/");
}

function loadSongs() {
  const raw = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "songs.json"), "utf8")
  );
  const used = new Set();
  const out = [];
  for (const r of raw) {
    if (!r || !r.title || !r.src) continue;
    let id = slugify(r.src);
    if (used.has(id)) {
      id = slugify(r.src) + "-" + Math.abs(hashCode(r.src)).toString(36).slice(0, 6);
    }
    used.add(id);
    out.push({
      id,
      title: r.title,
      artist: r.artist || "Akhil",
      audioUrl: toAbsUrl(r.src),
      coverUrl: r.cover ? toAbsUrl(r.cover) : "",
    });
  }
  return out;
}

module.exports = (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const songs = loadSongs();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(songs);
};
