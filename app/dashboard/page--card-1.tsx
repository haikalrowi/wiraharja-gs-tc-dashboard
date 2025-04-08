import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Card1({
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
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">{footer}</p>
      </CardFooter>
    </Card>
  );
}
