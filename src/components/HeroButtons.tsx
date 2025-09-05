'use client';
import React from 'react';

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/projects"
        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95"
      >
        View Projects
      </a>

      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-50"
      >
        Hire me
      </a>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
        onClick={() => { /* Placeholder action */ console.log('toggle layout'); }}
      >
        Toggle layout
      </button>
    </div>
  );
}