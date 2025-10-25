// src/components/ThemeBackground.jsx
import { useTheme } from "../hooks/useTheme";

const ThemeBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      
      {/* Dark Mode - Much more visible */}
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-black/90">
          {/* Large visible stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: '4px',
                  height: '4px',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
          
          {/* Large visible planets */}
          <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500/40 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/30 rounded-full blur-2xl"></div>
          
          {/* Visible text for debugging */}
          <div className="absolute top-10 left-10 text-white text-sm opacity-30">
            Dark Space Background
          </div>
        </div>
      )}
      
      {/* Light Mode - Much more visible */}
      {theme === 'light' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/90 via-cyan-100/80 to-white/90">
          {/* Large visible clouds */}
          <div className="absolute top-20 left-20 w-80 h-40 bg-white/80 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-48 bg-white/70 rounded-full blur-2xl"></div>
          
          {/* Large sun */}
          <div className="absolute top-10 right-10 w-60 h-60 bg-yellow-200/60 rounded-full blur-2xl"></div>
          
          {/* Visible text for debugging */}
          <div className="absolute top-10 left-10 text-gray-600 text-sm opacity-30">
            Light Sky Background
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeBackground;