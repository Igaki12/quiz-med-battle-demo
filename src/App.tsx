import { Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Header from './components/Header';
import Landing from './pages/Landing';
import Lobby from './pages/Lobby';
import Waiting from './pages/Waiting';
import Game from './pages/Game';
import Result from './pages/Result';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-burgundy-500/30 blur-3xl" />
      </div>
      <PhoneFrame>
        <div className="space-y-4">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/waiting" element={<Waiting />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </PhoneFrame>
    </div>
  );
}
