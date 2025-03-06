
import { useState } from "react";

export default function Clipboard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text="eernesto211@gmail" onCopy={handleCopy}>
      <span className="leading-tight text-light-gray font-normal cursor-pointer hover:underline">
        {copied ? "Copied to clipboard!" : "eernesto211@gmail.com"}
      </span>
    </CopyToClipboard>
  );
}
