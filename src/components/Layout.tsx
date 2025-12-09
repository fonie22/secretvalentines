import { t } from "i18next";

export type LayoutProps = {
  menuItems: React.ReactNode[];
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex lg:items-center justify-center p-4 lg:overflow-hidden">
          {children}
    </div>
  );
}
