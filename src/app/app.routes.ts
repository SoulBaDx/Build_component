import {Routes} from '@angular/router';
import { IndexComponent } from './index.component';
import { SetupVar1Component, SetupVar2Component, SetupVar3Component, SetupVar4Component, SetupVar5Component, SetupVar6Component, SetupVar7Component, SetupVar8Component, SetupVar9Component, SetupVar10Component, SetupVar11Component } from './setup-variations.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'setup1', component: SetupVar1Component },
  { path: 'setup2', component: SetupVar2Component },
  { path: 'setup3', component: SetupVar3Component },
  { path: 'setup4', component: SetupVar4Component },
  { path: 'setup5', component: SetupVar5Component },
  { path: 'setup6', component: SetupVar6Component },
  { path: 'setup7', component: SetupVar7Component },
  { path: 'setup8', component: SetupVar8Component },
  { path: 'setup9', component: SetupVar9Component },
  { path: 'setup10', component: SetupVar10Component },
  { path: 'setup11', component: SetupVar11Component },
];
