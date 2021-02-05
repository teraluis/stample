import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './module/map/map.component';
import {NgModule} from '@angular/core';
import {QrcodeComponent} from './module/qrcode/qrcode.component';
import {Observable} from 'rxjs';
import {ObservableComponent} from './module/observable/observable.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'qrcode', component: QrcodeComponent},
  {path: 'observable', component: ObservableComponent},
  {path: '**', redirectTo: 'qrcode', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

