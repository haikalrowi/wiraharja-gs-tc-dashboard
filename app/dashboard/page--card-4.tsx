import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreVertical, Pin } from "lucide-react";

const data = [
  {
    title: "Outing schedule for every department",
    description: "5 minutes ago",
  },
  {
    title: "Meeting HR Department",
    description: "Yesterday, 12:30 PM",
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    description: "Yesterday, 09:15 AM",
  },
  {
    title: "Review candidate applications",
    description: "Today - 11:30 AM",
  },
  {
    title: "Interview with candidates",
    description: "Today - 14:30 AM",
  },
  {
    title: "Short meeting with product designer from IT Department",
    description: "Today - 16:15 AM",
  },
];

function shuffleArray<A extends unknown[]>(array: A) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function Card4({
  arg,
}: {
  arg: {
    title: string;
    description: string;
    content: string;
    footer: string;
  };
}) {
  const { title, description, content, footer } = arg;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="my-auto">
        <h3 className="text-muted-foreground scroll-m-20 text-2xl font-bold tracking-tight">
          {content}
        </h3>
        <div className="flex flex-col gap-4">
          {shuffleArray(data)
            .slice(-3)
            .map((data) => (
              <Card key={data.title} className="relative">
                <CardHeader>
                  <CardTitle className="w-3/4">{data.title}</CardTitle>
                  <CardDescription className="w-3/4">
                    {data.description}
                  </CardDescription>
                  <div className="absolute -top-2 right-4 flex w-1/4 gap-2">
                    <Button variant="outline" size="icon" className="ml-auto">
                      <Pin />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MoreVertical />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="mx-auto">
          {footer}
        </Button>
      </CardFooter>
    </Card>
  );
}
