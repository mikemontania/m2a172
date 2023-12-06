import { Routes } from "@angular/router";
import { UsersComponent } from "./pages/users/users.component";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/dashboard/dashboard.component").then(
        m => m.DashboardComponent
      )
  },
  {
    path: "",
    loadComponent: () =>
      import("./pages/users/users.component").then(m => m.UsersComponent)
  },
  {
    path: "",
    loadComponent: () =>
      import("./pages/settings/settings.component").then(
        m => m.SettingsComponent
      )
  }
];
