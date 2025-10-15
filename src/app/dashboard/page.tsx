import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function DashboardPage() {
  return (
    <ContentLayout>
      <h2 className="text-2xl font-bold">Welcome to Tradewise Dashboard</h2>
      <p className="mt-4 text-muted-foreground">This is a demo integration of the shadcn admin panel.</p>
    </ContentLayout>
  );
}
