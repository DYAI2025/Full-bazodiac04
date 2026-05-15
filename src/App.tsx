/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import AstroExplanation from './components/AstroExplanation';
import HousesDashboard from './components/HousesDashboard';
import AspectsDashboard from './components/AspectsDashboard';
import InputForm from './components/InputForm';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { APIProvider } from '@vis.gl/react-google-maps';
import AstroExplanation from './components/AstroExplanation';
import HousesDashboard from './components/HousesDashboard';
import AspectsDashboard from './components/AspectsDashboard';
import InputForm from './components/InputForm';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [result, setResult] = useState<any>(null);

  if (!hasValidKey) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'sans-serif', backgroundColor: '#0f172a', color: 'white'}}>
        <div style={{textAlign:'center',maxWidth:520}}>
          <h2>Google Maps API Key Required</h2>
          <p><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" rel="noopener" style={{color: 'orange'}}>Get an API Key</a></p>
          <p><strong>Step 2:</strong> Add your key as a secret in AI Studio:</p>
          <ul style={{textAlign:'left',lineHeight:'1.8'}}>
            <li>Open <strong>Settings</strong> (⚙️ gear icon, <strong>top-right corner</strong>)</li>
            <li>Select <strong>Secrets</strong></li>
            <li>Type <code>GOOGLE_MAPS_PLATFORM_KEY</code> as the secret name, press <strong>Enter</strong></li>
            <li>Paste your API key as the value, press <strong>Enter</strong></li>
          </ul>
          <p>The app rebuilds automatically after you add the secret.</p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-ivory)] font-sans relative selection:bg-[var(--color-accent)]/30">
        {/* Atmosphere code preserved */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[60px]"></div>
          {/* Orbital Lines Overlay */}
          <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.5] -translate-y-1/4"></div>
          <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.2] translate-x-1/4"></div>
        </div>

        <header className="relative z-10 px-10 py-6 border-b border-white/10 flex justify-between items-center bg-[var(--color-dark)]/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[var(--color-accent)] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[var(--color-accent)] blur-[2px]"></div>
            </div>
            <span className="font-serif text-2xl tracking-widest uppercase text-white">Bazodiac</span>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-6">
              Was ist mein Aszendent?
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-ivory)]/80 mb-12 max-w-3xl mx-auto">
              Berechne kostenlos deinen Aszendenten, dein Mondzeichen und BaZi-Elemente – klar und hochwertig erklärt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
              <InputForm onResult={setResult} />
              {result && (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="font-serif text-xl border-b border-white/10 pb-2 mb-4">Ergebnisse</h3>
                      <pre className="text-xs overflow-auto">{JSON.stringify(result, null, 2)}</pre>
                  </div>
              )}
          </div>

          <AstroExplanation />
          <HousesDashboard isProvisional={true} />
          <AspectsDashboard aspects={result?.aspects} />
        </main>
      </div>
    </APIProvider>
  );
}
