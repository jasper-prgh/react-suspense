import {AsyncComponent1, AsyncComponent2} from './AsyncComponent'
import {Suspense} from 'react';

function App() {
  return <div className="App">
    <Suspense fallback={<div>loading 1...</div>} >
      <AsyncComponent1 />
      <Suspense fallback={<div>loading 2...</div>} >
        <AsyncComponent2 />
      </Suspense>
    </Suspense>
  </div>
}

export default App;
