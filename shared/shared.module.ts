import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module'; 

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component'

@NgModule({
    imports: [
        NgbModule,
        FlexLayoutModule,
        MaterialModule
    ],
    exports: [
        HeaderBarComponent,
        ProductCategoriesComponent
    ],
    declarations: [
        HeaderBarComponent,
        ProductCategoriesComponent
    ]
})

export class SharedModule {}