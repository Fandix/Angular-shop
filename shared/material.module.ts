import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatSliderModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule
    ],
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule
    ]
})
export class MaterialModule {}
