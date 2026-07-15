import { Button } from 'antd';
import type { ReactNode } from 'react';

type HeaderProps = {
  title: string;
  subtitle?: string;
  rightContent?: ReactNode;
  midContent?: ReactNode;
  className?: string;
};

export function Header({ title, subtitle, rightContent, midContent, className = '' }: HeaderProps) {
  return (
    <header className={`grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 ${className}`.trim()}>
      <div className="justify-self-start">
        <a href="/" className="text-white text-2xl font-semibold">{title}</a>
        {subtitle ? <p className="text-gray-400 text-sm mt-1">{subtitle}</p> : null}
      </div>

      {midContent ? (
        <div className="justify-self-center">
          {midContent}
        </div>
      ) : <div className="justify-self-center">
        </div>}

      {rightContent ? (
        <div className="justify-self-end">
          {rightContent}
        </div>
      ) :  <div className="justify-self-end">
          
        </div>}
    </header>
  );
}
