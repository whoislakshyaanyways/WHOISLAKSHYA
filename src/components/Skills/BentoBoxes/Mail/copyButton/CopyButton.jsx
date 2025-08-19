import React, { useState } from 'react';
import './CopyButton.css';

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "whoislakshyaanyways@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button className="Copy-Button" onClick={copyToClipboard}>
      <p className="button-text">
        {copied ? "Copied!" : "Copy Email Address"}
      </p>
    </button>
  );
}

export default CopyButton;
