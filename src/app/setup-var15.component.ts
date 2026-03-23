import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var15',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-slate-900 text-slate-200">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 text-slate-300"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-sky-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-sky-500/50 text-white shadow-lg shadow-sky-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Left Side: Copy -->
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium border border-sky-500/20">
            <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            Novo recurso disponível
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            Seu delivery online em <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">3 minutos</span>.
          </h1>
          
          <p class="text-lg text-slate-400">
            Crie sua loja, adicione produtos e comece a receber pedidos via WhatsApp ou painel web. Sem taxas abusivas, sem complicação.
          </p>
          
          <div class="flex items-center gap-6 text-sm text-slate-500">
            <div class="flex items-center gap-2">
              <span class="material-icons text-sky-500">check_circle</span>
              Sem mensalidade
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-sky-500">check_circle</span>
              Setup instantâneo
            </div>
          </div>
        </div>

        <!-- Right Side: Form Card -->
        <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <!-- Glow effect -->
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <h2 class="text-2xl font-bold text-white mb-6">Comece grátis</h2>
            
            <form class="space-y-5">
              <div>
                <label for="storeName15" class="block text-sm font-medium text-slate-300 mb-1.5">Nome do seu negócio</label>
                <input id="storeName15" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Pizzaria do Mario" class="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-500" />
              </div>

              <div>
                <label for="domain15" class="block text-sm font-medium text-slate-300 mb-1.5">Escolha seu link</label>
                <div class="flex rounded-xl overflow-hidden border border-slate-600 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 transition-all">
                  <input id="domain15" type="text" [(ngModel)]="domain" name="domain" placeholder="pizzariadomario" class="w-full bg-slate-900/50 px-4 py-3 text-white focus:outline-none placeholder:text-slate-500" />
                  <div class="bg-slate-800 px-4 py-3 text-slate-400 font-medium border-l border-slate-600 flex items-center">
                    .delivery.app
                  </div>
                </div>
              </div>

              <button type="button" class="w-full mt-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-900/30 transform hover:-translate-y-0.5">
                Criar minha loja agora
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var15" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar15Component {
  showCode = false;
  storeName = '';
  domain = '';
}
