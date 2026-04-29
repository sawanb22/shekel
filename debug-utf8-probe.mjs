import fs from "node:fs";

const ENDPOINT = "http://127.0.0.1:7469/ingest/d88ad346-fd3b-4c34-9204-18729a2e9a85";
const SESSION_ID = "838331";
const RUN_ID = process.env.RUN_ID ?? "pre-fix";
const target = "src/components/sections/workflows/UseCases.tsx";
const buf = fs.readFileSync(target);

function send(hypothesisId, location, message, data) {
  // #region agent log
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": SESSION_ID,
    },
    body: JSON.stringify({
      sessionId: SESSION_ID,
      runId: RUN_ID,
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
}

const nonAscii = [];
for (let i = 0; i < buf.length; i += 1) {
  if (buf[i] >= 0x80) nonAscii.push({ index: i, byte: buf[i] });
}

const sends = [];

sends.push(send("H1", "debug-utf8-probe.mjs:32", "non-ascii byte scan", {
  file: target,
  count: nonAscii.length,
  first: nonAscii[0] ?? null,
}));

sends.push(send("H2", "debug-utf8-probe.mjs:38", "byte-at-build-error-index", {
  file: target,
  index202: buf[202],
}));

try {
  const text = buf.toString("utf8");
  sends.push(send("H3", "debug-utf8-probe.mjs:45", "utf8 decode success", {
    decodedLength: text.length,
  }));
} catch (error) {
  sends.push(send("H3", "debug-utf8-probe.mjs:49", "utf8 decode threw", {
    error: String(error),
  }));
}

const around = Array.from(buf.slice(194, 210));
sends.push(send("H4", "debug-utf8-probe.mjs:56", "window-around-index-202", {
  start: 194,
  bytes: around,
}));

await Promise.all(sends);
