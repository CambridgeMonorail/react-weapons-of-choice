import { Avatar, AvatarFallback, AvatarImage } from '@rwoc/shared';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>DN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Dom Node</p>
          <p className="text-sm text-muted-foreground">dom.node@rwoc.dev</p>
        </div>
        <div className="ml-auto font-medium">+£1,234.56</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jason Script</p>
          <p className="text-sm text-muted-foreground">jason.script@rwoc.dev</p>
        </div>
        <div className="ml-auto font-medium">+£45.67</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Styles</p>
          <p className="text-sm text-muted-foreground">sarah.styles@rwoc.dev</p>
        </div>
        <div className="ml-auto font-medium">+£678.90</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Debbie Bug</p>
          <p className="text-sm text-muted-foreground">debbie.bug@rwoc.dev</p>
        </div>
        <div className="ml-auto font-medium">+£12.34</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ajax Fetcher</p>
          <p className="text-sm text-muted-foreground">ajax.fetcher@rwoc.dev</p>
        </div>
        <div className="ml-auto font-medium">+£89.01</div>
      </div>
    </div>
  );
}
