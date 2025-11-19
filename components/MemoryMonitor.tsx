import React, { useEffect, useState } from "react";

// ---- Memory API Helper ----
function getMemoryStatus() {
  const result = {};

  if (navigator.deviceMemory) {
    result.deviceMemoryGB = navigator.deviceMemory;
  } else {
    result.deviceMemoryGB = "Not supported";
  }

  if (performance.memory) {
    const memory = performance.memory;
    result.usedJSHeapMB = (memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
    result.totalJSHeapMB = (memory.totalJSHeapSize / 1024 / 1024).toFixed(2);
    result.jsHeapLimitMB = (memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2);
  } else {
    result.usedJSHeapMB = "Not supported";
  }

  return result;
}

export default function MemoryMonitor({ images }) {
  const [memory, setMemory] = useState(getMemoryStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setMemory(getMemoryStatus());
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const risk = (() => {
    if (memory.usedJSHeapMB === "Not supported") return null;

    const used = Number(memory.usedJSHeapMB);
    const limit = Number(memory.jsHeapLimitMB);
    const percent = (used / limit) * 100;
    return percent;
  })();

  return (
    <div className="p-4 rounded-2xl shadow bg-black space-y-4 w-full max-w-xl border">
      <h2 className="text-lg font-bold">Memory Monitor</h2>

      {/* Memory Status */}
      <div className="text-sm space-y-1">
        <p>Device RAM: {memory.deviceMemoryGB} GB</p>
        <p>Used JS Heap: {memory.usedJSHeapMB} MB</p>
        {memory.usedJSHeapMB !== "Not supported" && (
          <p>Heap Limit: {memory.jsHeapLimitMB} MB</p>
        )}
      </div>

      {risk !== null && (
        <div
          className={`p-2 rounded text-white text-sm ${
            risk > 80
              ? "bg-red-500"
              : risk > 60
              ? "bg-orange-500"
              : "bg-green-600"
          }`}
        >
          Memory Usage: {risk.toFixed(1)}%
        </div>
      )}

      {/* Image List */}
      <div className="mt-4">
        <h3 className="font-semibold text-base mb-2">Loaded Images</h3>
        {images.length === 0 ? (
          <p className="text-sm text-gray-500">No images loaded</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-auto">
            {images.map((img) => (
              <li
                key={img.id}
                className="p-2 border rounded flex items-center justify-between gap-3"
              >
                <div className="flex flex-col text-sm">
                  <span className="font-medium">{img.name}</span>
                  <span className="text-gray-500 text-xs">
                    {(img.file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
