import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { NfComponent } from './nf/nf.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    NfComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home',component:HomeComponent },
      {path: 'edit/:No',component:EditComponent },
      {path: 'about',component:AboutComponent },
      {path: 'contact',component:ContactComponent },
      {path: 'register',component:RegisterComponent },
      {path: '**',component:NfComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


