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
  MessageSquareIcon,
  SettingsIcon,
  UserSearchIcon,
  UsersIcon,
} from "lucide-react";

type ContentMenuItems =
  | {
      id: string;
      type: "default";
      buttonIcon: React.ComponentType;
      buttonChildren: string;
    }
  | {
      id: string;
      type: "custom";
      button: React.ComponentType;
    };

const sidebarGroups: {
  label: string;
  contentMenuItems: ContentMenuItems[];
}[] = [
  {
    label: "Main",
    contentMenuItems: [
      {
        id: "dashboard",
        type: "default",
        buttonIcon: LayoutDashboardIcon,
        buttonChildren: "Dashboard",
      },
      {
        id: "recruitment",
        type: "default",
        buttonIcon: UserSearchIcon,
        buttonChildren: "Recruitment",
      },
      {
        id: "schedule",
        type: "default",
        buttonIcon: Calendar1Icon,
        buttonChildren: "Schedule",
      },
      {
        id: "employee",
        type: "default",
        buttonIcon: UsersIcon,
        buttonChildren: "Employee",
      },
      {
        id: "department",
        type: "default",
        buttonIcon: BuildingIcon,
        buttonChildren: "Department",
      },
    ],
  },
  {
    label: "Other",
    contentMenuItems: [
      {
        id: "support",
        type: "default",
        buttonIcon: HeadphonesIcon,
        buttonChildren: "Support",
      },
      {
        id: "settings",
        type: "default",
        buttonIcon: SettingsIcon,
        buttonChildren: "Settings",
      },
    ],
  },
];
// const sidebarHeader: ContentMenuItems[] = [];
// const sidebarFooter: ContentMenuItems[] = [];

function ChatSidebarMenuItem(props: { data: ContentMenuItems }) {
  return (
    (props.data.type === "default" && (
      <SidebarMenuItem>
        <SidebarMenuButton>
          <props.data.buttonIcon />
          {props.data.buttonChildren}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )) ||
    (props.data.type === "custom" && (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <props.data.button />
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))
  );
}

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
                {sidebarGroup.contentMenuItems.map((items, index) => (
                  <ChatSidebarMenuItem data={items} key={index} />
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
