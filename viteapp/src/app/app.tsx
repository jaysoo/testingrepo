// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import {jslib} from '@testing/jslib';
console.log(jslib());

export function App() {
  return (
    <div>
      <NxWelcome title="viteapp" />
    </div>
  );
}

export default App;
