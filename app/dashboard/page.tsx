import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { connection } from "next/server";

const getRandom = (a: number, b: number) => {
  return Math.round(a + (Math.random() * b - a));
};

const getInfos: () => {
  title: string;
  count: number;
  description: string;
}[] = () => {
  return [
    {
      title: "Available Position",
      count: getRandom(0, 20),
      description: `${getRandom(0, 10)} Urgently needed`,
    },
    {
      title: "Job Open",
      count: getRandom(0, 20),
      description: `${getRandom(0, 10)} Active hiring`,
    },
    {
      title: "New Employees",
      count: getRandom(0, 20),
      description: `${getRandom(0, 10)} Department`,
    },
  ];
};

const getInfosWithChart: () => {
  title: string;
  description: string;
  count: number;
}[] = () => {
  return [
    {
      title: "Total Employees",
      description: `+${getRandom(10, 30)}% Past month`,
      count: getRandom(100, 200),
    },
    {
      title: "Talent Request",
      description: `+${getRandom(1, 10)}% Past month`,
      count: getRandom(10, 20),
    },
  ];
};

function Info(props: ReturnType<typeof getInfos>[number]) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {props.count}
        </h3>
      </CardContent>
      <CardFooter>
        <CardDescription>{props.description}</CardDescription>
      </CardFooter>
    </Card>
  );
}

function InfoWithChart(props: ReturnType<typeof getInfosWithChart>[number]) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {props.count}
        </h3>
      </CardContent>
      <CardFooter>
        <CardDescription>Chart (WIP)</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default async function Page() {
  await connection();

  return (
    <div className="container mx-auto grid gap-4 p-4 xl:grid-cols-2">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {getInfos().map((info, index) => (
            <Info
              title={info.title}
              count={info.count}
              description={info.description}
              key={index}
            />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {getInfosWithChart().map((infoWithChart, index) => (
            <InfoWithChart
              title={infoWithChart.title}
              count={infoWithChart.count}
              description={infoWithChart.description}
              key={index}
            />
          ))}
        </div>
      </div>

      <div>
        <Card className="h-64">
          <CardHeader>
            <CardTitle>You Posted a New Job</CardTitle>
            <CardDescription>
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </CardDescription>
          </CardHeader>
          <CardContent className="my-auto">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Today you makes {getRandom(1, 20)} Activity
            </h3>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">See all activity</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
