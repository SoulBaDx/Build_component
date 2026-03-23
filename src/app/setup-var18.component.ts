import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var18',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-zinc-50 text-zinc-900">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-200 text-zinc-800"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-blue-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/50 text-white shadow-lg shadow-blue-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <div class="max-w-md w-full relative z-10">
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-sm">
            <span class="material-icons text-3xl">storefront</span>
          </div>
          <h1 class="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Crie sua Loja Virtual</h1>
          <p class="text-zinc-500">Venda mais com um cardápio digital profissional.</p>
        </div>

        <div class="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl">
          <form class="space-y-6">
            
            <div class="space-y-2">
              <label for="storeName18" class="text-sm font-semibold text-zinc-700">Nome da Loja</label>
              <input id="storeName18" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Doceria da Maria" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-zinc-400" />
            </div>

            <div class="space-y-2">
              <label for="domain18" class="text-sm font-semibold text-zinc-700">Link da Loja</label>
              <div class="flex rounded-xl overflow-hidden border border-zinc-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                <input id="domain18" type="text" [(ngModel)]="domain" name="domain" placeholder="doceriadamaria" class="w-full bg-zinc-50 px-4 py-3 text-zinc-900 focus:outline-none placeholder:text-zinc-400" />
                <div class="bg-zinc-100 px-4 py-3 text-zinc-500 font-medium border-l border-zinc-200 flex items-center">
                  .delivery.app
                </div>
              </div>
            </div>

            <div class="pt-4">
              <button type="button" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                Começar a Vender <span class="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var18" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar18Component {
  showCode = false;
  storeName = '';
  domain = '';
}
