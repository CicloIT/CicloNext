// app/components/Jabali/JabaliPage.js
'use client';
import { useState, useEffect } from 'react';
import { ProjectSection } from './ProjectSection';
import { TechnologySection } from './TechnologySection';
import { ImpactSection } from './ImpactSection';
import { ResourcesSection } from './ResourcesSection';
import { Navigation } from './Navigation';
export function JabaliPage() {
  const [activeTab, setActiveTab] = useState('proyecto');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'proyecto':
        return <ProjectSection />;
      case 'tecnologia':
        return <TechnologySection />;
      case 'impacto':
        return <ImpactSection />;
      case 'recursos':
        return <ResourcesSection />;
      default:
        return <ProjectSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
}
