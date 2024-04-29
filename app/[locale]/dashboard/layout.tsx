import CustomLayout from "@/components/Sider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomLayout>{children}</CustomLayout>;
}
