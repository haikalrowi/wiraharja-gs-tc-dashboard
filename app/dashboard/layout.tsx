import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BellDotIcon,
  BuildingIcon,
  Calendar1Icon,
  HeadphonesIcon,
  LayoutDashboardIcon,
  LucideProps,
  MessageSquareIcon,
  SettingsIcon,
  UserSearchIcon,
  UsersIcon,
} from "lucide-react";

const sidebarGroups: {
  label: string;
  contentSidebarMenu: {
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    button: string;
  }[];
}[] = [
  {
    label: "Main",
    contentSidebarMenu: [
      {
        icon: LayoutDashboardIcon,
        button: "Dashboard",
      },
      {
        icon: UserSearchIcon,
        button: "Recruitment",
      },
      {
        icon: Calendar1Icon,
        button: "Schedule",
      },
      {
        icon: UsersIcon,
        button: "Employee",
      },
      {
        icon: BuildingIcon,
        button: "Department",
      },
    ],
  },
  {
    label: "Other",
    contentSidebarMenu: [
      {
        icon: HeadphonesIcon,
        button: "Support",
      },
      {
        icon: SettingsIcon,
        button: "Settings",
      },
    ],
  },
];

function LayoutSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-(--sidebar-header-height) border-b">
        <h3
          className={cn(
            "my-auto truncate text-center",
            "scroll-m-20 text-2xl font-semibold tracking-tight",
          )}
        >
          Dashboard
        </h3>
      </SidebarHeader>
      <SidebarContent>
        {sidebarGroups.map((sidebarGroup, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{sidebarGroup.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarGroup.contentSidebarMenu.map((sidebarMenu, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton>
                      <sidebarMenu.icon />
                      {sidebarMenu.button}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="[--sidebar-header-height:--spacing(16)]">
      <LayoutSidebar />
      <main className="w-full">
        <div className="bg-sidebar sticky top-0 flex h-(--sidebar-header-height) items-center gap-2 border-b px-2">
          <SidebarTrigger className="size-9" />
          <Input placeholder="Search" className="mx-auto max-w-xs" />
          <Button variant="ghost" size="icon">
            <BellDotIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquareIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={buttonVariants({ variant: "outline" })}
            >
              @user
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>User</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
