import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {RolesGuard} from './shared/guards/roles.guard';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './shared/services/login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { LoginEffects } from './login/login.effects';
import {EffectsModule} from '@ngrx/effects';
import { SelectPermissionComponent } from './select-permission/select-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SelectPermissionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    EffectsModule.forRoot([LoginEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  entryComponents: [LoginComponent, SelectPermissionComponent],
  providers: [AuthGuard, RolesGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
