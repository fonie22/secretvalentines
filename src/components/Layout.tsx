import { t } from "i18next";

export type LayoutProps = {
  menuItems: React.ReactNode[];
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
  <div className="min-h-screen flex lg:items-center justify-center p-4 lg:overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="my-12 md:my-16 flex flex-col justify-around lg:flex-row gap-12 md:gap-16" style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
 
  );
}
