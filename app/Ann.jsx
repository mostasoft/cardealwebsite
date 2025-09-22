// components/AnnouncementBar.tsx
"use client";

import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-red-600 text-white text-center py-2 text-sm font-medium">
      🚗 Big Sale This Month – Get Up to <span className="font-bold">20% Off</span> on Selected Cars!
    </div>
  );
}
