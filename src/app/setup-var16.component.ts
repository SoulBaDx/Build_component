import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';

@Component({
  selector: 'app-setup-var16',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans bg-white text-zinc-900">
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-zinc-100 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-200 text-zinc-800"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-rose-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-rose-500/50 text-white shadow-lg shadow-rose-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Side: Minimalist Form -->
        <div class="max-w-md mx-auto lg:mx-0 w-full">
          <div class="mb-12">
            <h1 class="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Venda mais. <br/><span class="text-rose-600">Com menos esforço.</span></h1>
            <p class="text-lg text-zinc-500">Crie seu cardápio digital em segundos e receba pedidos organizados diretamente no seu WhatsApp.</p>
          </div>

          <form class="space-y-8">
            <div class="space-y-3">
              <label for="storeName16" class="block text-sm font-semibold text-zinc-700 uppercase tracking-wider">Qual o nome do seu negócio?</label>
              <input id="storeName16" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: Sushi do Japa" class="w-full bg-transparent border-b-2 border-zinc-200 px-0 py-3 text-2xl text-zinc-900 focus:outline-none focus:border-rose-600 transition-colors placeholder:text-zinc-300" />
            </div>

            <div class="space-y-3">
              <label for="domain16" class="block text-sm font-semibold text-zinc-700 uppercase tracking-wider">Seu link exclusivo</label>
              <div class="flex items-center border-b-2 border-zinc-200 focus-within:border-rose-600 transition-colors">
                <span class="text-zinc-400 text-xl py-3 pr-2">app.delivery/</span>
                <input id="domain16" type="text" [(ngModel)]="domain" name="domain" placeholder="sushidojapa" class="w-full bg-transparent px-0 py-3 text-xl text-zinc-900 focus:outline-none placeholder:text-zinc-300" />
              </div>
            </div>

            <button type="button" class="mt-12 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-xl shadow-zinc-900/20 flex items-center gap-3 text-lg">
              Começar Agora <span class="material-icons">arrow_right_alt</span>
            </button>
          </form>
        </div>

        <!-- Right Side: Abstract Illustration / UI Mockup -->
        <div class="hidden lg:block relative h-[600px] w-full bg-zinc-50 rounded-[3rem] border border-zinc-100 overflow-hidden shadow-2xl">
          <!-- Decorative elements -->
          <div class="absolute top-1/4 -left-12 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div class="absolute top-1/3 -right-12 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <!-- Mockup UI -->
          <div class="absolute inset-0 flex items-center justify-center p-12">
            <div class="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden">
              <div class="h-48 bg-zinc-100 relative">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover" alt="Food" />
                <div class="absolute -bottom-8 left-6 w-16 h-16 bg-white rounded-2xl shadow-lg border border-zinc-100 flex items-center justify-center">
                  <span class="material-icons text-rose-500 text-3xl">restaurant</span>
                </div>
              </div>
              <div class="p-6 pt-12">
                <div class="h-6 w-3/4 bg-zinc-200 rounded-md mb-4"></div>
                <div class="h-4 w-1/2 bg-zinc-100 rounded-md mb-8"></div>
                
                <div class="space-y-4">
                  <div class="flex gap-4 items-center">
                    <div class="w-16 h-16 bg-zinc-100 rounded-xl"></div>
                    <div class="flex-1">
                      <div class="h-4 w-full bg-zinc-200 rounded-md mb-2"></div>
                      <div class="h-3 w-1/3 bg-zinc-100 rounded-md"></div>
                    </div>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div class="w-16 h-16 bg-zinc-100 rounded-xl"></div>
                    <div class="flex-1">
                      <div class="h-4 w-5/6 bg-zinc-200 rounded-md mb-2"></div>
                      <div class="h-3 w-1/4 bg-zinc-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var16" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar16Component {
  showCode = false;
  storeName = '';
  domain = '';
}
