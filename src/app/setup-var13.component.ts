import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var13',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-zinc-50">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-200 text-zinc-800"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-indigo-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-indigo-500/50 text-white shadow-lg shadow-indigo-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <div class="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        <!-- Left Side: Branding/Info -->
        <div class="md:w-5/12 bg-indigo-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
          <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-700 rounded-full blur-3xl opacity-50"></div>
          
          <div class="relative z-10">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/30">
              <span class="material-icons text-2xl">rocket_launch</span>
            </div>
            <h2 class="text-3xl font-bold mb-4">Bem-vindo ao Futuro do Delivery</h2>
            <p class="text-indigo-100 leading-relaxed">
              Configure sua loja em minutos e comece a vender para milhares de clientes hoje mesmo.
            </p>
          </div>

          <div class="relative z-10 mt-12">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span class="material-icons text-sm">check</span>
              </div>
              <span class="text-sm font-medium">Setup Rápido</span>
            </div>
            <div class="flex items-center gap-4 mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span class="material-icons text-sm">check</span>
              </div>
              <span class="text-sm font-medium">Domínio Personalizado</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span class="material-icons text-sm">check</span>
              </div>
              <span class="text-sm font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Form -->
        <div class="md:w-7/12 p-10 md:p-14 bg-white">
          <div class="mb-10">
            <h1 class="text-2xl font-bold text-zinc-900 mb-2">Crie sua Conta</h1>
            <p class="text-zinc-500">Preencha os dados básicos da sua nova loja.</p>
          </div>

          <form class="space-y-6">
            <div>
              <label for="storeName13" class="block text-sm font-semibold text-zinc-700 mb-2">Nome da Loja</label>
              <input id="storeName13" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Burger King" class="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
            </div>

            <div>
              <label for="domain13" class="block text-sm font-semibold text-zinc-700 mb-2">Subdomínio</label>
              <div class="flex rounded-lg overflow-hidden border border-zinc-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
                <input id="domain13" type="text" [(ngModel)]="domain" name="domain" placeholder="burgerking" class="w-full bg-zinc-50 px-4 py-3 text-zinc-900 focus:outline-none" />
                <div class="bg-zinc-100 px-4 py-3 text-zinc-500 font-medium border-l border-zinc-200 flex items-center">
                  .delivery.app
                </div>
              </div>
              <p class="text-xs text-zinc-500 mt-2">Seus clientes acessarão sua loja por este link.</p>
            </div>

            <button type="button" class="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2">
              Criar Minha Loja <span class="material-icons text-sm">arrow_forward</span>
            </button>
            
            <p class="text-center text-xs text-zinc-500 mt-6">
              Ao criar sua loja, você concorda com nossos <a href="#" class="text-indigo-600 hover:underline">Termos de Serviço</a> e <a href="#" class="text-indigo-600 hover:underline">Política de Privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var13" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar13Component {
  showCode = false;
  storeName = '';
  domain = '';
}
