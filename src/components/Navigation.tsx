import { NavigationItem } from '../types';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigationItems: NavigationItem[] = [
  { path: 'home', label: 'Inicio' },
  { path: 'importance', label: 'Importancia de IT' },
  { path: 'approaches', label: 'Enfoques Metodológicos' },
  { path: 'concepts', label: 'Conceptos Clave' },
  { path: 'model', label: 'Modelo ITIL' },
  { path: 'bibliography', label: 'Bibliografía' },
];

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IT</span>
              </div>
              <span className="text-white font-bold text-xl">ITIL v4 Fundamentos</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPage === item.path
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-slate-800 border-t border-slate-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === item.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
