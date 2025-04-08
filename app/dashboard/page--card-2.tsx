import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Card2({
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
    <Card className="min-h-70">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="my-auto">
        <h3 className="text-muted-foreground scroll-m-20 text-2xl font-bold tracking-tight">
          {content}
        </h3>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">{footer}</Button>
      </CardFooter>
    </Card>
  );
}
