import { useState } from "react";
import PopupContent from "./PopupContent"; // Make sure the path is correct

const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ position: 'relative', padding: '4rem', height: '150px' }}>
    {/* So popup can be positioned correctly */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
      />
      <button onClick={handleCopy}>Copy</button>

      {/* Show popup if copied */}
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
