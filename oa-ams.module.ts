import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { AmsModule } from '~/app/open-age/ams/ams.module';
import { SharedModule } from '~/app/shared/shared.module';
import { OaCommonModule } from '../common/oa-common.module';
import { OaDirectoryModule } from '../directory/oa-directory.module';
import { AddLeaveDialogComponent } from './add-leave-dialog/add-leave-dialog.component';
import { AddShiftDialogComponent } from './add-shift-dialog/add-shift-dialog.component';
import { ApplyLeaveTypeComponent } from './apply-leave-type/apply-leave-type.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { CalendarComponent } from './attendance-calendar/calendar.component';
import { AttendanceStatusComponent } from './attendance-status/attendance-status.component';
import { BiometricListComponent } from './biometric-list/biometric-list.component';
import { BulkTimeLogsDialogComponent } from './bulk-time-logs-dialog/bulk-time-logs-dialog.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { MyDetailsComponent } from './day-summary/my-details.component';
import { DeviceCategoryListComponent } from './device-category-list/device-category-list.component';
import { DeviceCategoryPickerComponent } from './device-category-picker/device-category-picker.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceTypePickerComponent } from './device-type-picker/device-type-picker.component';
import { EffectiveShiftsDetailComponent } from './effective-shifts-detail/effective-shifts-detail.component';
import { EffectiveShiftsListComponent } from './effective-shifts-list/effective-shifts-list.component';
import { ExtendShiftDialogComponent } from './extend-shift-dialog/extend-shift-dialog.component';
import { GetDateDialogComponent } from './get-date-dialog/get-date-dialog.component';
import { HolidayEditorComponent } from './holiday-editor/holiday-editor.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { LeaveBalanceEditorComponent } from './leave-balance-editor/leave-balance-editor.component';
import { LeaveBalanceListComponent } from './leave-balance-list/leave-balance-list.component';
import { LeaveBalanceWidgetComponent } from './leave-balance-widget/leave-balance-widget.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveReasonDialogComponent } from './leave-reason-dialog/leave-reason-dialog.component';
import { LeaveTypeDetailsComponent } from './leave-type-details/leave-type-details.component';
import { LeaveTypesListComponent } from './leave-types-list/leave-types-list.component';
import { MonthlyAttendanceListComponent } from './month-list/monthly-attendance-list.component';
import { NewDeviceComponent } from './new-device/new-device.component';
import { NewLeaveTypeComponent } from './new-leave-type/new-leave-type.component';
import { ShiftPickerComponent } from './shift-picker/shift-picker.component';
import { ShiftTypeDetailComponent } from './shift-type-detail/shift-type-detail.component';
import { ShiftTypeListComponent } from './shift-type-list/shift-type-list.component';
import { ShiftTypeNewComponent } from './shift-type-new/shift-type-new.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { AttendanceLogsComponent } from './timelogs-list/attendance-logs.component';
import { EntityNewDialogComponent } from './shift-type-new/entity-new-dialog/entity-new-dialog.component';

const components = [
  DeviceCategoryListComponent,
  DeviceListComponent,
  DeviceDetailsComponent,
  DeviceCategoryPickerComponent,
  DeviceTypePickerComponent,
  BiometricListComponent,
  HolidayListComponent,
  ShiftTypeListComponent,
  HolidayEditorComponent,
  AttendanceLogsComponent,
  ShiftTypeListComponent,
  TimeLogComponent,
  DailyAttendanceComponent,
  ApplyLeaveComponent,
  NewDeviceComponent,
  LeaveTypesListComponent,
  NewLeaveTypeComponent,
  LeaveTypeDetailsComponent,
  ShiftTypeNewComponent,
  ShiftTypeDetailComponent,
  ApplyLeaveTypeComponent,
  ShiftTypeDetailComponent,
  CalendarComponent,
  LeaveListComponent,
  LeaveBalanceWidgetComponent,
  MyDetailsComponent,
  TeamListComponent,
  EffectiveShiftsDetailComponent,
  AttendanceStatusComponent,
  CheckOutComponent,
  CheckInComponent,
  LeaveBalanceListComponent,
  EffectiveShiftsListComponent,
  ShiftPickerComponent,
  MonthlyAttendanceListComponent,
  LeaveBalanceEditorComponent,
  EntityNewDialogComponent
];
const thirdPartyModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatDatepickerModule,
];

const dialogs = [
  GetDateDialogComponent,
  AddShiftDialogComponent,
  BulkTimeLogsDialogComponent,
  ExtendShiftDialogComponent,
  LeaveReasonDialogComponent,
  AddLeaveDialogComponent,
  EntityNewDialogComponent
];
const services = [];
const guards = [];
const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    AmsModule,
    SharedModule,
    OaDirectoryModule,
    OaCommonModule,
    ...thirdPartyModules,
  ],
  declarations: [...components, ...dialogs, ...pipes],
  exports: [...components, ...pipes],
  providers: [...services, ...guards],
  entryComponents: [...dialogs]
})
export class OaAmsModule { }
