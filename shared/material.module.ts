import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatSliderModule,
        MatButtonModule,
        MatTabsModule
    ],
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatTabsModule
    ]
})
export class MaterialModule {}
