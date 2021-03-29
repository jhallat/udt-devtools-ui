import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';



@NgModule({
    declarations: [GroupComponent],
    exports: [
        GroupComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
