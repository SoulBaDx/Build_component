import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var14',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-zinc-950 text-zinc-200">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-800 text-zinc-300"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-emerald-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-500/50 text-white shadow-lg shadow-emerald-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px]"></div>
      </div>

      <div class="max-w-md w-full relative z-10">
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 shadow-xl shadow-black/50">
            <span class="material-icons text-3xl text-emerald-500">dashboard</span>
          </div>
          <h1 class="text-3xl font-bold text-white tracking-tight mb-2">Configure seu Workspace</h1>
          <p class="text-zinc-400">Crie seu ambiente de trabalho e comece a gerenciar suas entregas.</p>
        </div>

        <div class="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <form class="space-y-6">
            
            <div class="space-y-2">
              <label for="storeName14" class="text-sm font-medium text-zinc-300">Nome do Workspace</label>
              <input id="storeName14" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Acme Corp Delivery" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600" />
            </div>

            <div class="space-y-2">
              <label for="domain14" class="text-sm font-medium text-zinc-300">URL do Workspace</label>
              <div class="flex rounded-xl overflow-hidden border border-zinc-800 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                <input id="domain14" type="text" [(ngModel)]="domain" name="domain" placeholder="acmecorp" class="w-full bg-zinc-950 px-4 py-3 text-white focus:outline-none placeholder:text-zinc-600" />
                <div class="bg-zinc-900 px-4 py-3 text-zinc-500 font-medium border-l border-zinc-800 flex items-center">
                  .delivery.app
                </div>
              </div>
              <p class="text-xs text-zinc-500 mt-2">Você pode alterar isso depois nas configurações.</p>
            </div>

            <div class="pt-4">
              <button type="button" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2">
                Criar Workspace <span class="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
        
        <p class="text-center text-sm text-zinc-500 mt-8">
          Já tem um workspace? <a href="#" class="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">Fazer login</a>
        </p>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var14" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar14Component {
  showCode = false;
  storeName = '';
  domain = '';
}
