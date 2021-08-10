import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderBarComponent } from './components/header-bar/header-bar.component'

@NgModule({
    imports: [
        NgbModule,
        FlexLayoutModule
    ],
    exports: [
        HeaderBarComponent
    ],
    declarations: [
        HeaderBarComponent
    ]
})

export class SharedModule {}