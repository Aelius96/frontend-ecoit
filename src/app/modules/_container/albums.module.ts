import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumControlComponent } from "../typical/albums/album-control/album-control.component";
import { AlbumsDetailComponent } from "../typical/albums/albums-detail/albums-detail.component";



const routes: Routes = [
    {path:'' , component: AlbumControlComponent},
    {path:'detail', component:AlbumsDetailComponent}
  
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class AlbumsModule{}