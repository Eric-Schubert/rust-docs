import React, { useState } from 'react';
import { userPlugins } from './data/user';
import { adminPlugins } from './data/admin';
import { PluginCard } from './components/PluginCard';
import { SearchBar } from './components/SearchBar';
import { User, Shield, Sun, Moon } from 'lucide-react';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggle } = useTheme();

  const filteredPlugins = (activeTab === 'user' ? userPlugins : adminPlugins).filter(
      (plugin) =>
          plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plugin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plugin.commands.some(
              (cmd) =>
                  cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
  );

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="py-8 bg-white dark:bg-gray-800 shadow-sm relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
                onClick={toggle}
                className="absolute right-4 top-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
            >
              {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <div className="flex items-center gap-8">
              <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                    src="rust-docs/public/images/rust.webp"
                    alt="Code Editor"
                    className="w-full h-full object-cover object-center opacity-75 dark:opacity-50"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-left">
                  Plugin Doku
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-left">
                  Entdecke alle verfügbaren Plugin-Befehle und deren Verwendung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="flex space-x-4 mt-6">
              <button
                  onClick={() => setActiveTab('user')}
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg ${
                      activeTab === 'user'
                          ? 'bg-white dark:bg-gray-800 shadow-md text-indigo-600 dark:text-indigo-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-all duration-200`}
              >
                <User className="w-5 h-5 mr-2" />
                Nutzer Befehle
              </button>
              <button
                  onClick={() => setActiveTab('admin')}
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg ${
                      activeTab === 'admin'
                          ? 'bg-white dark:bg-gray-800 shadow-md text-indigo-600 dark:text-indigo-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-all duration-200`}
              >
                <Shield className="w-5 h-5 mr-2" />
                Admin Befehle
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredPlugins.map((plugin) => (
                <PluginCard key={plugin.name} plugin={plugin} />
            ))}
            {filteredPlugins.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">Keine Plugins gefunden.</p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default App;