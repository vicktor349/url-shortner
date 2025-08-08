import React, { useState } from 'react'


export default function Home() {
  const [input, setInput] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const convertToPdf = () => {
    try {
      let dataBytes: Uint8Array;

      const cleaned = input.trim();

      const base64Pattern = /^[A-Za-z0-9+/=\s]+$/;

      if (base64Pattern.test(cleaned) && !cleaned.startsWith("0x")) {
        const binaryString = atob(cleaned.replace(/\s+/g, ""));
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          byteArray[i] = binaryString.charCodeAt(i);
        }
        dataBytes = byteArray;
      } else {
        let cleanHex = cleaned;
        if (cleanHex.startsWith("0x")) cleanHex = cleanHex.slice(2);
        cleanHex = cleanHex.replace(/[^A-Fa-f0-9]/g, "");
        const byteArray = new Uint8Array(
          cleanHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
        );
        dataBytes = byteArray;
      }

      const blob = new Blob([dataBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      alert("Invalid hex or Base64 string");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hex / Base64 to PDF Converter</h1>

      <textarea
        placeholder="Paste your hex or Base64 string here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        style={{ width: "100%", marginBottom: "1rem", border: "1px solid black", padding: "10px", outline: 'none' }}
      />

      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={convertToPdf}
          style={{
            padding: "0.5rem 1rem",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Convert & Preview
        </button>
      </div>

      {pdfUrl && (
        <>
          <h2>PDF Preview</h2>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            style={{ border: "1px solid #ccc" }}
          ></iframe>
          <div style={{ marginTop: "1rem" }}>
            <a
              href={pdfUrl}
              download="converted.pdf"
              style={{
                background: "green",
                color: "white",
                padding: "0.5rem 1rem",
                textDecoration: "none",
              }}
            >
              Download PDF
            </a>
          </div>
        </>
      )}
    </div>
  );
}
