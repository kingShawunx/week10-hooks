import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-content">
      <p className="count-value" aria-live="polite">{count}</p>
      <div className="button-row">
        <button className="button button-secondary" type="button" onClick={() => setCount((current) => current - 1)}>− Decrement</button>
        <button className="button button-primary" type="button" onClick={() => setCount((current) => current + 1)}>+ Increment</button>
        <button className="button button-quiet" type="button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
