import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        <Sidebar />

        <div
          className="ml-[265px] px-10"
          style={{ width: "calc(100% - 265px)" }}
        >
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
