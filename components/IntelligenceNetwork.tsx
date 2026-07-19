"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { x: .14, y: .24, r: 6, c: "#4fd6e6" }, { x: .82, y: .16, r: 6, c: "#7aa8ff" },
  { x: .50, y: .50, r: 9, c: "#4fd6e6" }, { x: .20, y: .80, r: 5, c: "#7aa8ff" },
  { x: .86, y: .74, r: 5, c: "#4fd6e6" }, { x: .58, y: .88, r: 4, c: "#9a86ff" },
  { x: .70, y: .36, r: 4, c: "#9a86ff" },
];
const edges = [[0,2],[1,2],[3,2],[4,2],[5,2],[6,2],[0,3],[1,6],[4,5],[3,5],[1,4]];

export function IntelligenceNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, time = 0, frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!reduced) time += .007;
      const positions = nodes.map((node, index) => ({
        ...node,
        x: node.x * width + Math.sin(time + index * 1.3) * 5,
        y: node.y * height + Math.cos(time * .8 + index) * 5,
      }));
      edges.forEach(([from, to], index) => {
        const a = positions[from], b = positions[to];
        ctx.strokeStyle = "rgba(79,214,230,.13)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        const progress = ((time * .32) + index * .11) % 1;
        ctx.fillStyle = "rgba(126,230,242,.9)";
        ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * progress, a.y + (b.y - a.y) * progress, 1.7, 0, Math.PI * 2); ctx.fill();
      });
      positions.forEach((node, index) => {
        const pulse = .5 + .5 * Math.sin(time * 1.4 + index);
        ctx.fillStyle = `rgba(79,214,230,${.04 + pulse * .05})`;
        ctx.beginPath(); ctx.arc(node.x, node.y, node.r + 4 + pulse * 3, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#0c1620"; ctx.strokeStyle = node.c; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="network" aria-hidden="true">
      <canvas ref={canvasRef} />
      <span className="network-label" style={{ left: "8%", top: "20%" }}>store</span>
      <span className="network-label" style={{ right: "6%", top: "12%" }}>digital</span>
      <span className="network-label" style={{ left: "44%", top: "47%" }}>context</span>
      <span className="network-label" style={{ left: "14%", bottom: "16%" }}>inventory</span>
      <span className="network-label" style={{ right: "10%", bottom: "22%" }}>signals</span>
    </div>
  );
}
