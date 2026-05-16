"use client";

import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      body: JSON.stringify({
        message: msg,
      }),
    });

    const data = await res.json();

    setReply(data.reply);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-cyan-500 p-4 rounded-full"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-black p-4 rounded-xl border border-white/10">
          <h3 className="text-cyan-400 font-bold">
            AI Assistant
          </h3>

          <div className="h-40 overflow-y-auto mt-3 text-gray-300">
            {reply}
          </div>

          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Ask..."
            className="w-full p-2 mt-3 rounded bg-white/5 border border-white/10"
          />

          <button
            onClick={send}
            className="w-full mt-2 bg-cyan-500 py-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}