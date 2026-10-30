import { useEffect, useRef, useState } from 'react';

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="component-content">
      <label className="field-label" htmlFor="search-input">Search</label>
      <input
        id="search-input"
        ref={inputRef}
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Type something..."
      />
      <p className="search-result" aria-live="polite">You typed: <strong>{searchText || '—'}</strong></p>
      <p className="render-count">Render count: <strong>{renderCount.current}</strong></p>
    </div>
  );
}

export default SearchBox;
