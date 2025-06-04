import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { ManageExcludeComponent } from './manage-exclude/manage-exclude.component';
import { ManageUpdateComponent } from './manage-update/manage-update.component';
import { ManageCreateComponent } from './manage-create/manage-create.component';
import { DeleteMemberComponent } from './manage-exclude/delete-member/delete-member.component';
import { UpdateModalComponent } from './profile/update-modal/update-modal.component';
import { UpdateListComponent } from './manage-update/update-list/update-list.component';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'time', component: MembersComponent},
    {path: 'login', component: LoginModalComponent},
    {path: 'time/:user_id', component: ProfileComponent},
    {path: 'manage', component: ManagePageComponent},
    {path: 'manage/exclude', component:DeleteMemberComponent},
    {path: 'manage/update', component:UpdateListComponent},
    {path: 'manage/create', component: ManageCreateComponent},
    {path: 'manage/exclude/:user_id', component: ManageExcludeComponent},
    {path: 'manage/update/:user_id', component: ManageUpdateComponent}
];
