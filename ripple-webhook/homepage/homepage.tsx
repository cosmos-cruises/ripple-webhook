import type { ReactNode } from 'react';

export type HomepageProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Homepage({ children }: HomepageProps) {
  return (
    <div>
      {children}
    </div>
  );
}
