import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export const metadata = {
  title: "Dashboard - Tradewise",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
  );
}
