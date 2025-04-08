import { Card1 } from "./page--card-1";
import { Card2 } from "./page--card-2";
import { Card3 } from "./page--card-3";

export default function Page() {
  return (
    <div className="py-4">
      <div>
        <div className="flex flex-col gap-4 *:flex-1 lg:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 *:flex-1 md:flex-row">
              <Card1
                arg={{
                  title: "Available Position",
                  description: "",
                  content: "24",
                  footer: "4 Urgently needed",
                }}
              />
              <Card1
                arg={{
                  title: "Job Open",
                  description: "",
                  content: "10",
                  footer: "4 Active hiring",
                }}
              />
              <Card1
                arg={{
                  title: "New Employees",
                  description: "",
                  content: "12",
                  footer: "4 Department",
                }}
              />
            </div>
            <div className="flex flex-col gap-4 *:flex-1 md:flex-row">
              <Card3
                arg={{
                  title: "Total Employees",
                  description: "+2% Past month",
                  content: "216",
                  footer: "120 Men | 96 Women",
                }}
              />
              <Card3
                arg={{
                  title: "Talent Request",
                  description: "+5% Past month",
                  content: "16",
                  footer: "6 Men | 10 Women",
                }}
              />
            </div>
          </div>
          <div>
            <Card2
              arg={{
                title: "You Posted a New Job",
                description:
                  "Kindly check the requirements and terms of work and make sure everything is right.",
                content: "Today you makes 12 Activity",
                footer: "See All Activity",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
