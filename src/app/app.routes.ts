import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { MaterialPageComponent } from './examples/material-page/material-page.component';
import { ManageComponent } from './examples/manage/manage.component';
import { LearnAngularComponent } from './examples/learn-angular/learn-angular.component';

export const routes: Routes = [
    { path: 'post', redirectTo: 'post/index', pathMatch: 'full' },
    { path: 'post/index', component: IndexComponent },
    { path: 'post/:postId/view', component: ViewComponent },
    { path: 'post/create', component: CreateComponent },
    { path: 'post/:postId/edit', component: EditComponent },
    {path: 'examples/material-data', component: MaterialPageComponent},
    {path: 'examples/manage', component: ManageComponent},
    {path: 'examples/learn', component: LearnAngularComponent}
];
