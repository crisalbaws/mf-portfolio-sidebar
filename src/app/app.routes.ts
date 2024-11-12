import { Routes } from "@angular/router"
import { SidebarComponent } from "./layout/sidebar/sidebar.component"

export const routes: Routes = [
    {
        path: '',
        component: SidebarComponent
    },
    {
        path: '**',
        component: SidebarComponent
    },
];