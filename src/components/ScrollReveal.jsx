import { useVisible } from '../hooks/useVisible';

export const Reveal = ({ children, delay = 0, dir = 'up', className = '' }) => {
  const [ref, visible] = useVisible();
  const base = 'transition-all duration-700 ease-out';
  const dirs = {
    up:    { from: 'opacity-0 translate-y-8',  to: 'opacity-100 translate-y-0' },
    left:  { from: 'opacity-0 -translate-x-12', to: 'opacity-100 translate-x-0' },
    right: { from: 'opacity-0 translate-x-12',  to: 'opacity-100 translate-x-0' },
    down:  { from: 'opacity-0 -translate-y-8', to: 'opacity-100 translate-y-0' },
    scale: { from: 'opacity-0 scale-95', to: 'opacity-100 scale-100' },
  };
  const { from, to } = dirs[dir] || dirs.up;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${visible ? to : from} ${className}`}
    >
      {children}
    </div>
  );
};
