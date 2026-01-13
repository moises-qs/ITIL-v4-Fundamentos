import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/importancia-gestion-servicios-ti', label: 'Importancia de IT' },
  { path: '/enfoques-metodologicos', label: 'Enfoques Metodológicos' },
  { path: '/conceptos-clave', label: 'Conceptos Clave' },
  { path: '/modelo-itil', label: 'Modelo ITIL' },
  { path: '/bibliografia', label: 'Bibliografía' },
];

export default function Navigation() {
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
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-slate-800 border-t border-slate-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
