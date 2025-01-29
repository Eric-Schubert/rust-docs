import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Plugin } from '../types';

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4 transition-all duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="text-left w-full">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-left">{plugin.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{plugin.description}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 pb-4">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
            {plugin.commands.map((cmd, index) => (
              <div
                key={index}
                className="mb-4 last:mb-0 bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
              >
                <code className="text-sm font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                  {cmd.command}
                </code>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}