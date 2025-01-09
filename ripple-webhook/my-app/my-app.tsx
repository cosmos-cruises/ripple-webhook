import { Routes, Route } from 'react-router-dom';
import { Homepage } from '@cosmo-cruises/ripple-webhook.Homepage';

export function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<Homepage><h1>Hello world!</h1></Homepage>} />
    </Routes>
  );
}