import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module'; 

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component'
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        NgbModule,
        FlexLayoutModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        HeaderBarComponent,
        ProductCategoriesComponent,
        ProductThumbnailComponent
    ],
    declarations: [
        HeaderBarComponent,
        ProductCategoriesComponent,
        ProductThumbnailComponent
    ]
})

export class SharedModule {}