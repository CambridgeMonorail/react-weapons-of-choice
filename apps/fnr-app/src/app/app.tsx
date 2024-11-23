import NxWelcome from './nx-welcome';
import { Button } from '@react-monorepo/shared';

export function App() {
  return (
    <div>
      <Button variant={'outline'}>Shared button</Button>
      <NxWelcome title="fnr-app" />
    </div>
  );
}

export default App;
