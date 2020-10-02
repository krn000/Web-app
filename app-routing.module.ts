import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home', loadChildren: 'src/app/home/home.module#HomeModule'
}, {
  path: 'video', loadChildren: 'src/app/drive/drive.module#DriveModule', canActivate: [RoleGuard]
}, {
  path: 'practice', loadChildren: 'src/app/practice/practice.module#PracticeModule', canActivate: [RoleGuard]
}, {
  path: 'appointment', loadChildren: 'src/app/appointment/appointment.module#AppointmentModule', canActivate: [RoleGuard]
},{
  path: 'practitioner', loadChildren: 'src/app/practitioner/practitioner.module#PractitionerModule', canActivate: [RoleGuard]
}, {
  path: 'medicine', loadChildren: 'src/app/medicine/medicine.module#MedicineModule', canActivate: [RoleGuard]
}, {
  path: 'reports', loadChildren: 'src/app/reports/reports.module#ReportsModule', canActivate: [RoleGuard]
}, {
  path: 'settings', loadChildren: 'src/app/settings/settings.module#SettingsModule', canActivate: [RoleGuard]
}, {
  path: 'patients', loadChildren: 'src/app/patients/patients.module#PatientsModule', canActivate: [RoleGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
