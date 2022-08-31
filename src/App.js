import { loadPyodide } from 'pyodide';
import { useEffect, useRef } from 'react';

const App = () => {
  const pyodideRef = useRef();

  useEffect(() => {
    (async () => {
      // Throws a "module not found" error
      pyodideRef.current = await loadPyodide({
        indexURL: 'http://localhost:3000/static/js',
      });
    })();
  });
  return (
    <div>
      Hello world
      {/* Image loads successfully from the public folder */}
      <img
        src="http://localhost:3000/logo512.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
};

export default App;
