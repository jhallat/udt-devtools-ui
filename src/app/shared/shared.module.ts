import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { InputIconComponent } from './icons/input-icon.component';
import {GroupIconComponent} from './icons/group-icon.component';
import {ButtonbarIconComponent} from './icons/buttonbar-icon.component';



@NgModule({
    declarations: [GroupComponent, SidePanelComponent, InputIconComponent, GroupIconComponent, ButtonbarIconComponent],
    exports: [
        GroupComponent,
        SidePanelComponent,
        InputIconComponent,
        GroupIconComponent,
        ButtonbarIconComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
