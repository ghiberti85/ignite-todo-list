import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Counter } from './components/Counter';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <main>
        <Counter />
      </main>

    </div>
  )
}
