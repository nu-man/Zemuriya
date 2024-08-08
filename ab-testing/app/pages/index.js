import { useEffect, useState } from 'react';

export default function Home() {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Get the A/B test group from the cookie
    const abTestGroup = document.cookie
      .split('; ')
      .find(row => row.startsWith('ab-test-group='))
      ?.split('=')[1];
    
    if (abTestGroup) {
      setVariant(abTestGroup);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to our A/B test page!</h1>
      <button style={{ backgroundColor: variant === 'B' ? 'blue' : 'green' }}>
        Click me!
      </button>
    </div>
  );
}
