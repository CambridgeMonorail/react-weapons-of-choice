import { FC } from 'react';
import { Button } from "@rwoc/shadcnui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@rwoc/shadcnui";

export const CardDemo: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src="./placeholder.svg?height=100&width=200"
            alt="Placeholder"
            className="w-full h-auto mb-4"
          />
          <p>This card includes an image.</p>
        </CardContent>
      </Card>
    </div>
  );
};
