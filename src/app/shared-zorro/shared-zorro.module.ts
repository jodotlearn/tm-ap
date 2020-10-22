import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [],
    imports: [
    ],
    exports: [
        NzFormModule
        , NzInputModule
        , NzButtonModule
        , NzIconModule
        , NzCheckboxModule
        , NzToolTipModule
        , NzLayoutModule
        , BrowserAnimationsModule
    ]
})
export class SharedZorroModule { }
