import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var17',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-zinc-950 text-zinc-200">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-800 text-zinc-300"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-violet-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-violet-500/50 text-white shadow-lg shadow-violet-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
        
        <!-- Left Side: Dark Mode Form -->
        <div class="max-w-md mx-auto lg:mx-0 w-full p-8 lg:p-12 order-2 lg:order-1">
          <div class="mb-10">
            <div class="w-12 h-12 bg-violet-900/30 border border-violet-500/30 rounded-xl flex items-center justify-center mb-6 text-violet-400">
              <span class="material-icons text-2xl">bolt</span>
            </div>
            <h1 class="text-3xl font-bold text-white tracking-tight mb-3">Lançamento Rápido</h1>
            <p class="text-zinc-400">Sua plataforma de delivery pronta para operar em menos de 5 minutos.</p>
          </div>

          <form class="space-y-6">
            <div class="space-y-2">
              <label for="storeName17" class="text-sm font-medium text-zinc-300">Nome do Estabelecimento</label>
              <input id="storeName17" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Cantina da Nonna" class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600" />
            </div>

            <div class="space-y-2">
              <label for="domain17" class="text-sm font-medium text-zinc-300">Endereço Web</label>
              <div class="flex rounded-lg overflow-hidden border border-zinc-800 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 transition-all">
                <input id="domain17" type="text" [(ngModel)]="domain" name="domain" placeholder="cantinadanonna" class="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none placeholder:text-zinc-600" />
                <div class="bg-zinc-950 px-4 py-3 text-zinc-500 font-medium border-l border-zinc-800 flex items-center">
                  .delivery.app
                </div>
              </div>
            </div>

            <button type="button" class="w-full mt-8 bg-violet-600 hover:bg-violet-500 text-white font-medium py-3.5 rounded-lg transition-colors shadow-lg shadow-violet-900/20 flex items-center justify-center gap-2">
              Iniciar Configuração <span class="material-icons text-sm">arrow_forward</span>
            </button>
          </form>
        </div>

        <!-- Right Side: Dark Mode Illustration -->
        <div class="relative h-[400px] lg:h-[700px] w-full bg-zinc-900 rounded-[2rem] border border-zinc-800 overflow-hidden order-1 lg:order-2 mb-8 lg:mb-0">
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Burger" />
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent"></div>
          
          <div class="absolute bottom-12 left-12 right-12">
            <div class="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-violet-900/50 border border-violet-500/30 flex items-center justify-center">
                  <span class="material-icons text-violet-400">restaurant_menu</span>
                </div>
                <div>
                  <h3 class="text-white font-bold">Cardápio Digital</h3>
                  <p class="text-sm text-zinc-400">Atualize em tempo real</p>
                </div>
              </div>
              <div class="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div class="h-full bg-violet-500 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var17" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar17Component {
  showCode = false;
  storeName = '';
  domain = '';
}
