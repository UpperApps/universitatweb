import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PesquisadoresComponent } from './pesquisadores/pesquisadores.component';
import { ProjetosPesquisaComponent } from './projetos-pesquisa/projetos-pesquisa.component';
import { HomeComponent } from './home/home.component'
// Route Configuration
export const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'pesquisadores',
    component: PesquisadoresComponent
  },
  {
      path: 'projetos-pesquisa',
      component: ProjetosPesquisaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);