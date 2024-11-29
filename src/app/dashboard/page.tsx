import ComponentBarChart from "@/components/card-bar-chart";
import ChartLine from "@/components/card-chart";
import ComponentPieChart from "@/components/card-pie-chart";
import DataTableDemo from "@/components/table-data";


export const metadata = {
  title: "Dashboard Home",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 ">
          <ChartLine />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <ComponentBarChart />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50" >
          <ComponentPieChart />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <DataTableDemo />
      </div>
    </div>
  );
}
