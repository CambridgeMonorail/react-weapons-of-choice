import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@rwoc/shared';

export function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="aspect-video rounded-xl bg-muted/50">
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder content for card 1</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted/50">
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder content for card 2</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted/50">
          <CardHeader>
            <CardTitle>Card 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder content for card 3</p>
          </CardContent>
        </Card>
      </div>
      <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <CardHeader>
          <CardTitle>Main Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Placeholder content for the main section</p>
        </CardContent>
      </Card>
    </div>
  );
}