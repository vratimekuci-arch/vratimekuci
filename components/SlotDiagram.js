"use client";
import React from "react";
import { useI18n } from "@/lib/i18n";

// Mala skica: ogrlica spreda (širina) i presek ogrlice sa ivice (širina + debljina).
export default function SlotDiagram() {
  const { t } = useI18n();
  return (
    <svg viewBox="0 0 300 100" className="slotDiagram" role="img" aria-label={`${t.slotWidthName} / ${t.slotThicknessName}`}>
      <defs>
        <marker id="slotArr" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L8 4 L0 8 z" />
        </marker>
      </defs>

      {/* Spreda: traka ogrlice, širina je vertikalna mera trake */}
      <rect className="strap" x="10" y="24" width="100" height="34" rx="4" />
      <circle className="hole" cx="36" cy="41" r="2.4" />
      <circle className="hole" cx="52" cy="41" r="2.4" />
      <circle className="hole" cx="68" cy="41" r="2.4" />
      <line className="dim" x1="122" y1="24" x2="122" y2="58" markerStart="url(#slotArr)" markerEnd="url(#slotArr)" />
      <text x="128" y="45">{t.slotWidthName}</text>
      <text className="cap" x="60" y="88" textAnchor="middle">{t.slotViewFront}</text>

      {/* Sa ivice: presek, širina je horizontalna, debljina vertikalna */}
      <rect className="strap" x="188" y="32" width="44" height="12" rx="2" />
      <line className="dim" x1="188" y1="54" x2="232" y2="54" markerStart="url(#slotArr)" markerEnd="url(#slotArr)" />
      <text x="210" y="67" textAnchor="middle">{t.slotWidthName}</text>
      <line className="dim" x1="242" y1="32" x2="242" y2="44" markerStart="url(#slotArr)" markerEnd="url(#slotArr)" />
      <text x="248" y="42">{t.slotThicknessName}</text>
      <text className="cap" x="210" y="88" textAnchor="middle">{t.slotViewEdge}</text>
    </svg>
  );
}
