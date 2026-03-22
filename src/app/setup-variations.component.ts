import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setup-var1',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" class="w-full h-full object-cover opacity-60" alt="Bright Tavern Background" />
        <div class="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/70 to-ink/95"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <!-- Setup Card -->
      <div class="relative z-10 max-w-xl w-full bg-parchment rounded-sm shadow-2xl border-4 border-ink-light p-8 sm:p-12 text-ink">
        <!-- Corner decorations -->
        <div class="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-ink-light"></div>
        <div class="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-ink-light"></div>
        <div class="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-ink-light"></div>
        <div class="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-ink-light"></div>

        <div class="text-center mb-8">
          <span class="material-icons text-5xl text-accent mb-2">storefront</span>
          <h1 class="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-ink">Fundar Taverna</h1>
          <p class="text-ink-light mt-2 italic">O primeiro passo para alimentar o reino.</p>
        </div>

        <form class="space-y-6 text-left">
          <div>
            <label for="storeName1" class="block font-display font-bold text-sm uppercase tracking-wider mb-2 text-ink-light">Nome do Estabelecimento</label>
            <input id="storeName1" type="text" placeholder="Ex: O Javali Saltitante" class="w-full bg-parchment-dark border-2 border-ink/20 focus:border-accent px-4 py-3 outline-none transition-colors font-sans text-lg placeholder:text-ink/40" />
          </div>

          <div>
            <label for="domain1" class="block font-display font-bold text-sm uppercase tracking-wider mb-2 text-ink-light">Domínio Mágico (URL)</label>
            <div class="flex items-stretch">
              <input id="domain1" type="text" placeholder="ojavalisaltitante" class="w-full bg-parchment-dark border-2 border-r-0 border-ink/20 focus:border-accent px-4 py-3 outline-none transition-colors font-sans text-lg placeholder:text-ink/40" />
              <div class="bg-ink-light text-parchment px-4 py-3 border-2 border-ink-light flex items-center font-bold tracking-wide">
                .taverna.app
              </div>
            </div>
            <p class="text-xs text-ink-light/70 mt-2 italic">Este será o endereço onde os viajantes encontrarão seu cardápio.</p>
          </div>

          <button type="button" class="w-full mt-8 group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-display text-xl font-bold text-parchment bg-accent border-2 border-ink-light shadow-[4px_4px_0px_0px_rgba(44,30,22,1)] hover:shadow-[2px_2px_0px_0px_rgba(44,30,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all duration-200 uppercase tracking-widest cursor-pointer">
            <span class="material-icons">gavel</span>
            Forjar Estabelecimento
          </button>
        </form>
      </div>
    </main>
  `
})
export class SetupVar1Component {}

@Component({
  selector: 'app-setup-var2',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex flex-col md:flex-row font-sans bg-zinc-950 text-zinc-200">
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      
      <!-- Left Side: Image 2 (Moody Tavern) -->
      <div class="md:w-1/2 relative min-h-[30vh] md:min-h-screen">
        <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-zinc-950"></div>
        <div class="absolute bottom-12 left-12 right-12 hidden md:block">
          <h2 class="font-display text-5xl text-amber-500 font-bold mb-4">Expanda seu Império</h2>
          <p class="text-xl text-zinc-300 font-light">Configure sua loja digital e alcance clientes além das muralhas da cidade.</p>
        </div>
      </div>

      <!-- Right Side: Setup Form -->
      <div class="md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative z-10">
        <div class="w-full max-w-md">
          <div class="mb-10">
            <div class="w-16 h-16 bg-amber-900/30 border border-amber-500/50 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
              <span class="material-icons text-3xl">map</span>
            </div>
            <h1 class="text-3xl font-bold text-white mb-2">Configuração da Loja</h1>
            <p class="text-zinc-400">Defina os detalhes principais do seu delivery.</p>
          </div>

          <form class="space-y-6">
            <div class="space-y-2">
              <label for="storeName2" class="text-sm font-medium text-zinc-300">Nome da Loja</label>
              <input id="storeName2" type="text" placeholder="A Estalagem do Dragão" class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-zinc-600" />
            </div>

            <div class="space-y-2">
              <label for="domain2" class="text-sm font-medium text-zinc-300">Subdomínio</label>
              <div class="flex rounded-lg overflow-hidden border border-zinc-800 focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all">
                <input id="domain2" type="text" placeholder="estalagemdodragao" class="w-full bg-zinc-900 px-4 py-3 text-white focus:outline-none placeholder:text-zinc-600" />
                <div class="bg-zinc-800 px-4 py-3 text-zinc-400 border-l border-zinc-700 flex items-center whitespace-nowrap">
                  .delivery.com
                </div>
              </div>
              <p class="text-xs text-zinc-500 mt-1">Seus clientes farão pedidos através deste link.</p>
            </div>

            <button type="button" class="w-full mt-8 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]">
              Continuar Jornada
              <span class="material-icons text-sm">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  `
})
export class SetupVar2Component {}

@Component({
  selector: 'app-setup-var3',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 font-sans relative">
      <!-- Background Image 3 (Candlelit Tavern) -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover" alt="Background" />
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <!-- Glassmorphism Card -->
      <div class="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div class="text-center mb-10">
          <h1 class="font-display text-4xl font-normal text-white mb-3 tracking-wide">Sua Taverna</h1>
          <div class="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto"></div>
        </div>

        <form class="space-y-8">
          <div class="relative">
            <input type="text" id="storeName3" class="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-yellow-500 transition-colors placeholder-transparent" placeholder="Nome" />
            <label for="storeName3" class="absolute left-0 -top-5 text-sm text-yellow-500/80 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-yellow-500">Nome da Taverna</label>
          </div>

          <div class="relative pt-2">
            <label for="domain3" class="block text-sm text-yellow-500/80 mb-2">Endereço Web (Subdomínio)</label>
            <div class="flex items-end border-b-2 border-white/20 focus-within:border-yellow-500 transition-colors pb-2">
              <span class="text-white/40 mr-1">https://</span>
              <input id="domain3" type="text" placeholder="suataverna" class="w-full bg-transparent text-white text-xl focus:outline-none placeholder:text-white/20" />
              <span class="text-white/60 ml-1 whitespace-nowrap">.pedidos.app</span>
            </div>
          </div>

          <button type="button" class="w-full mt-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-light tracking-widest uppercase py-4 rounded-full transition-all hover:border-yellow-500/50 backdrop-blur-sm">
            Reivindicar Domínio
          </button>
        </form>
      </div>
    </main>
  `
})
export class SetupVar3Component {}

// ==========================================
// NOVOS TEMPLATES: ESTILO CUTSCENE / DIÁLOGO
// ==========================================

@Component({
  selector: 'app-setup-var4',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex flex-col font-sans relative bg-black overflow-hidden">
      <div class="absolute inset-0 z-0">
        <!-- COLOQUE SUA IMAGEM AQUI NO SRC -->
        <img src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <!-- Top Content Area (Empty to show background) -->
      <div class="flex-grow relative z-10"></div>

      <!-- Visual Novel Dialogue Box Area -->
      <div class="relative z-20 w-full max-w-5xl mx-auto px-4 pb-8">
        
        <!-- Character Sprite -->
        <div class="absolute bottom-[90%] left-8 w-48 h-48 md:w-64 md:h-64 transition-transform duration-500" [class.translate-y-4]="step === 2">
          <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Elara&backgroundColor=transparent" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" alt="Character" />
        </div>

        <!-- Dialogue Box -->
        <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
          <!-- Character Name Badge -->
          <div class="absolute -top-5 left-6 bg-amber-800 border-2 border-amber-500 text-amber-100 px-6 py-1 rounded-full font-display font-bold text-lg tracking-wider shadow-lg">
            Elara, a Recepcionista
          </div>

          <div class="flex flex-col md:flex-row gap-8 items-start mt-4">
            <!-- Dialogue Text -->
            <div class="flex-1">
              @if (step === 1) {
                <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                  "Saudações, viajante! Vejo que deseja abrir uma nova taverna de entregas em nossa guilda. Para registrarmos no grande livro, <span class="text-amber-400 font-bold">como a chamaremos?</span>"
                </p>
              }
              @if (step === 2) {
                <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                  "Um nome formidável! Agora, precisamos de um <span class="text-amber-400 font-bold">endereço mágico</span> para que as carroças encontrem seu estabelecimento. Qual será o seu subdomínio?"
                </p>
              }
              @if (step === 3) {
                <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                  "Tudo pronto! Seu registro foi selado com magia. Prepare os fornos, pois os pedidos começarão a chegar em breve!"
                </p>
              }
            </div>

            <!-- Action Area (Inputs) -->
            <div class="w-full md:w-1/3 shrink-0 flex flex-col gap-4 border-l-2 border-zinc-700/50 pl-0 md:pl-8">
              @if (step === 1) {
                <div class="animate-in">
                  <label for="storeName4" class="block text-xs text-amber-500 uppercase tracking-widest mb-2 font-bold">Nome da Taverna</label>
                  <input id="storeName4" type="text" [(ngModel)]="storeName" placeholder="Ex: O Dragão Faminto" class="w-full bg-black/50 border border-amber-700/50 rounded p-3 text-white focus:border-amber-400 focus:outline-none transition-colors" />
                  <button (click)="nextStep()" [disabled]="!storeName" class="w-full mt-4 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 disabled:hover:bg-amber-700 text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2">
                    Continuar <span class="material-icons text-sm">play_arrow</span>
                  </button>
                </div>
              }
              @if (step === 2) {
                <div class="animate-in">
                  <label for="domain4" class="block text-xs text-amber-500 uppercase tracking-widest mb-2 font-bold">Subdomínio</label>
                  <div class="flex bg-black/50 border border-amber-700/50 rounded focus-within:border-amber-400 transition-colors overflow-hidden">
                    <input id="domain4" type="text" [(ngModel)]="domain" placeholder="odragaofaminto" class="w-full bg-transparent p-3 text-white focus:outline-none" />
                  </div>
                  <p class="text-xs text-zinc-500 mt-1 text-right">.delivery.app</p>
                  <div class="flex gap-2 mt-4">
                    <button (click)="prevStep()" class="px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors flex items-center justify-center">
                      <span class="material-icons text-sm">arrow_back</span>
                    </button>
                    <button (click)="nextStep()" [disabled]="!domain" class="flex-1 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 disabled:hover:bg-amber-700 text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2">
                      Assinar Registro <span class="material-icons text-sm">edit_document</span>
                    </button>
                  </div>
                </div>
              }
              @if (step === 3) {
                <div class="animate-in flex flex-col justify-center h-full">
                  <button class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    Entrar na Taverna <span class="material-icons text-sm">login</span>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  `
})
export class SetupVar4Component {
  step = 1;
  storeName = '';
  domain = '';

  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var5',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 font-sans relative bg-[#1a100c]">
      <div class="absolute inset-0 z-0">
        <!-- COLOQUE SUA IMAGEM AQUI NO SRC -->
        <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-br from-[#2a1610]/80 to-[#0a0503]/90"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <div class="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        <!-- Left: Character & Speech Bubble -->
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-end relative">
          <!-- Speech Bubble -->
          <div class="bg-zinc-100 text-zinc-900 p-6 rounded-3xl rounded-br-none shadow-2xl mb-4 relative max-w-md animate-in">
            <h3 class="font-bold text-orange-700 mb-2 uppercase tracking-wider text-sm">Grom, o Ferreiro</h3>
            @if (step === 1) {
              <p class="text-lg font-medium">"Hahaha! Uma taverna de entregas? Genial! O aço está quente, só me diga: <span class="font-bold text-orange-600">Qual o nome da sua forja... digo, loja?</span>"</p>
            }
            @if (step === 2) {
              <p class="text-lg font-medium">"Belo nome! Tem peso! Agora, precisamos de um <span class="font-bold text-orange-600">caminho mágico</span> para as carroças acharem você. Digite aí!"</p>
            }
            @if (step === 3) {
              <p class="text-lg font-medium">"Pronto! Bati o martelo. Sua loja está forjada e pronta para a batalha. Que os lucros sejam pesados como bigornas!"</p>
            }
            <!-- Bubble tail -->
            <div class="absolute -bottom-4 right-8 w-8 h-8 bg-zinc-100 transform rotate-45"></div>
          </div>

          <!-- Avatar -->
          <div class="w-48 h-48 bg-orange-900/50 rounded-full border-4 border-orange-600 overflow-hidden shadow-[0_0_30px_rgba(234,88,12,0.3)]">
            <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Grom" class="w-full h-full object-cover" alt="Character" />
          </div>
        </div>

        <!-- Right: Action Panel -->
        <div class="w-full md:w-1/2">
          <div class="bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-700 p-8 rounded-2xl shadow-2xl">
            
            <div class="flex justify-between items-center mb-8">
              <h2 class="text-2xl font-display font-bold text-white">Forja da Loja</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 rounded-full transition-colors" [class.bg-orange-500]="step >= 1" [class.bg-zinc-700]="step < 1"></div>
                <div class="w-3 h-3 rounded-full transition-colors" [class.bg-orange-500]="step >= 2" [class.bg-zinc-700]="step < 2"></div>
                <div class="w-3 h-3 rounded-full transition-colors" [class.bg-orange-500]="step >= 3" [class.bg-zinc-700]="step < 3"></div>
              </div>
            </div>

            @if (step === 1) {
              <div class="animate-in">
                <label for="storeName5" class="block text-zinc-400 mb-2">Nome do Estabelecimento</label>
                <input id="storeName5" type="text" [(ngModel)]="storeName" class="w-full bg-zinc-950 border-2 border-zinc-800 focus:border-orange-500 rounded-xl p-4 text-white text-lg outline-none transition-colors" placeholder="Ex: Forja dos Sabores" />
                <button (click)="nextStep()" [disabled]="!storeName" class="w-full mt-6 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors text-lg">
                  Bater o Martelo
                </button>
              </div>
            }

            @if (step === 2) {
              <div class="animate-in">
                <label for="domain5" class="block text-zinc-400 mb-2">Subdomínio (URL)</label>
                <div class="flex items-center bg-zinc-950 border-2 border-zinc-800 focus-within:border-orange-500 rounded-xl overflow-hidden transition-colors">
                  <input id="domain5" type="text" [(ngModel)]="domain" class="w-full bg-transparent p-4 text-white text-lg outline-none" placeholder="forjadossabores" />
                  <span class="text-zinc-500 pr-4 font-medium">.delivery.com</span>
                </div>
                <div class="flex gap-4 mt-6">
                  <button (click)="prevStep()" class="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors">Voltar</button>
                  <button (click)="nextStep()" [disabled]="!domain" class="flex-1 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors text-lg">
                    Confirmar URL
                  </button>
                </div>
              </div>
            }

            @if (step === 3) {
              <div class="animate-in text-center py-8">
                <span class="material-icons text-6xl text-orange-500 mb-4">verified</span>
                <h3 class="text-2xl font-bold text-white mb-2">Loja Forjada com Sucesso!</h3>
                <p class="text-zinc-400 mb-8">Seu estabelecimento está pronto para receber os primeiros pedidos.</p>
                <button class="w-full bg-white text-zinc-900 hover:bg-zinc-200 font-bold py-4 rounded-xl transition-colors text-lg">
                  Acessar Painel
                </button>
              </div>
            }

          </div>
        </div>

      </div>
    </main>
  `
})
export class SetupVar5Component {
  step = 1;
  storeName = '';
  domain = '';

  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var6',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex flex-col font-sans relative bg-black">
      <div class="absolute inset-0 z-0">
        <!-- COLOQUE SUA IMAGEM AQUI NO SRC -->
        <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Background" />
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <!-- Cinematic Letterbox Top -->
      <div class="h-24 md:h-32 bg-black w-full relative z-20 flex items-center justify-center border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <h1 class="font-display text-2xl md:text-3xl text-white tracking-[0.3em] uppercase opacity-80">Decreto Real</h1>
      </div>

      <!-- Center Content (The Form) -->
      <div class="flex-grow relative z-10 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/20 p-8 rounded-sm shadow-2xl">
          
          @if (step === 1) {
            <div class="animate-in text-center">
              <label for="storeName6" class="sr-only">Nome da Taverna</label>
              <input id="storeName6" type="text" [(ngModel)]="storeName" placeholder="Nome da Taverna" class="w-full bg-transparent border-b-2 border-white/30 focus:border-yellow-500 text-center text-3xl text-white py-4 outline-none transition-colors font-display placeholder:text-white/20" />
              <button (click)="nextStep()" [disabled]="!storeName" class="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white uppercase tracking-widest text-sm transition-all disabled:opacity-30">Prosseguir</button>
            </div>
          }

          @if (step === 2) {
            <div class="animate-in text-center">
              <label for="domain6" class="sr-only">Subdomínio</label>
              <div class="flex items-end border-b-2 border-white/30 focus-within:border-yellow-500 transition-colors pb-2">
                <input id="domain6" type="text" [(ngModel)]="domain" placeholder="subdominio" class="w-full bg-transparent text-right text-2xl text-white outline-none placeholder:text-white/20" />
                <span class="text-white/50 text-xl ml-1">.reino.app</span>
              </div>
              <div class="flex justify-center gap-4 mt-12">
                <button (click)="prevStep()" class="px-6 py-3 bg-transparent border border-white/30 text-white uppercase tracking-widest text-sm transition-all hover:bg-white/5">Voltar</button>
                <button (click)="nextStep()" [disabled]="!domain" class="px-8 py-3 bg-yellow-600/80 hover:bg-yellow-500 border border-yellow-400/50 text-white uppercase tracking-widest text-sm transition-all disabled:opacity-30">Selar Acordo</button>
              </div>
            </div>
          }

          @if (step === 3) {
            <div class="animate-in text-center">
              <span class="material-icons text-5xl text-yellow-500 mb-4">history_edu</span>
              <h2 class="text-2xl text-white font-display mb-8">O Decreto foi Selado.</h2>
              <button class="px-8 py-3 bg-white text-black uppercase tracking-widest text-sm font-bold transition-all hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">Iniciar Operações</button>
            </div>
          }

        </div>
      </div>

      <!-- Cinematic Letterbox Bottom (Subtitles) -->
      <div class="h-32 md:h-40 bg-black w-full relative z-20 flex items-center justify-center px-8 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        
        <!-- Herald Avatar -->
        <div class="absolute left-4 md:left-12 bottom-0 w-32 h-32 md:w-48 md:h-48">
          <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Herald&backgroundColor=transparent" class="w-full h-full object-contain" alt="Character" />
        </div>

        <!-- Subtitles -->
        <div class="max-w-3xl mx-auto text-center pl-24 md:pl-0">
          @if (step === 1) {
            <p class="text-lg md:text-2xl text-white/90 font-serif italic animate-in">
              "Por ordem do Rei, toda nova rota de suprimentos deve ser devidamente nomeada. Declare o título de sua estalagem."
            </p>
          }
          @if (step === 2) {
            <p class="text-lg md:text-2xl text-white/90 font-serif italic animate-in">
              "Para que os corvos mensageiros encontrem seu estabelecimento, defina a sua assinatura mágica no registro do reino."
            </p>
          }
          @if (step === 3) {
            <p class="text-lg md:text-2xl text-white/90 font-serif italic animate-in">
              "Está feito. Que a prosperidade acompanhe suas carroças de entrega. Vida longa ao Rei!"
            </p>
          }
        </div>
      </div>
    </main>
  `
})
export class SetupVar6Component {
  step = 1;
  storeName = '';
  domain = '';

  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var7',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex flex-col font-sans relative bg-black overflow-hidden">
      <!-- Background Outside -->
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="!inside" [class.opacity-0]="inside">
        <img src="https://images.unsplash.com/photo-1590005354167-6da97ce231ce?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover" alt="Background" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <!-- Background Inside -->
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-0]="!inside" [class.opacity-100]="inside">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover" alt="Background" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      @if (!inside) {
        <div class="relative z-10 flex-grow flex items-center justify-center animate-in">
          <div class="text-center">
            <h1 class="text-5xl md:text-7xl font-display text-white font-bold mb-8 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Guilda dos Mercadores</h1>
            <button (click)="enterGuild()" class="px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold rounded-lg text-xl border-2 border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all hover:scale-105">
              Entrar na Guilda
            </button>
          </div>
        </div>
      } @else {
        <!-- Inside Dialogue UI -->
        <div class="relative z-20 w-full max-w-5xl mx-auto px-4 pb-8 mt-auto animate-in delay-500">
          <!-- Character Sprite -->
          <div class="absolute bottom-[90%] left-8 w-48 h-48 md:w-64 md:h-64 transition-transform duration-500" [class.translate-y-4]="step === 2">
            <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Lyra&backgroundColor=transparent" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" alt="Character" />
          </div>

          <!-- Dialogue Box -->
          <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
            <div class="absolute -top-5 left-6 bg-amber-800 border-2 border-amber-500 text-amber-100 px-6 py-1 rounded-full font-display font-bold text-lg tracking-wider shadow-lg">
              Lyra, a Balconista
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-start mt-4">
              <div class="flex-1">
                @if (step === 1) {
                  <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                    "Bem-vindo à Guilda dos Mercadores! É sempre bom ver um novo rosto. Qual será o nome da sua nova empreitada?"
                  </p>
                }
                @if (step === 2) {
                  <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                    "Excelente. E qual será o seu registro mágico (subdomínio) para que possamos enviar as carroças?"
                  </p>
                }
                @if (step === 3) {
                  <p class="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed animate-in">
                    "Tudo certo! Aqui está o seu alvará. Que os deuses do comércio abençoem suas vendas!"
                  </p>
                }
              </div>

              <div class="w-full md:w-1/3 shrink-0 flex flex-col gap-4 border-l-2 border-zinc-700/50 pl-0 md:pl-8">
                @if (step === 1) {
                  <div class="animate-in">
                    <label for="storeName7" class="block text-xs text-amber-500 uppercase tracking-widest mb-2 font-bold">Nome da Loja</label>
                    <input id="storeName7" type="text" [(ngModel)]="storeName" placeholder="Ex: O Dragão Faminto" class="w-full bg-black/50 border border-amber-700/50 rounded p-3 text-white focus:border-amber-400 focus:outline-none transition-colors" />
                    <button (click)="nextStep()" [disabled]="!storeName" class="w-full mt-4 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2">
                      Continuar <span class="material-icons text-sm">play_arrow</span>
                    </button>
                  </div>
                }
                @if (step === 2) {
                  <div class="animate-in">
                    <label for="domain7" class="block text-xs text-amber-500 uppercase tracking-widest mb-2 font-bold">Subdomínio</label>
                    <div class="flex bg-black/50 border border-amber-700/50 rounded focus-within:border-amber-400 transition-colors overflow-hidden">
                      <input id="domain7" type="text" [(ngModel)]="domain" placeholder="odragaofaminto" class="w-full bg-transparent p-3 text-white focus:outline-none" />
                    </div>
                    <p class="text-xs text-zinc-500 mt-1 text-right">.guilda.app</p>
                    <div class="flex gap-2 mt-4">
                      <button (click)="prevStep()" class="px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors flex items-center justify-center">
                        <span class="material-icons text-sm">arrow_back</span>
                      </button>
                      <button (click)="nextStep()" [disabled]="!domain" class="flex-1 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2">
                        Assinar <span class="material-icons text-sm">edit_document</span>
                      </button>
                    </div>
                  </div>
                }
                @if (step === 3) {
                  <div class="animate-in flex flex-col justify-center h-full">
                    <button class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                      Pegar Alvará <span class="material-icons text-sm">login</span>
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  `
})
export class SetupVar7Component {
  inside = false;
  step = 1;
  storeName = '';
  domain = '';

  enterGuild() { this.inside = true; }
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var8',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center font-sans relative bg-black">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-40" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <div class="relative z-10 w-full max-w-md p-8">
        <!-- The Mirror Frame -->
        <div class="border-8 border-zinc-800 rounded-[100px] rounded-b-none p-2 bg-zinc-900/50 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center backdrop-blur-sm">
          
          <div class="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent animate-pulse"></div>

          <div class="relative z-20 text-center w-full px-8">
            <span class="material-icons text-6xl text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">auto_awesome</span>
            
            @if (step === 1) {
              <label for="storeName8" class="sr-only">Seu Nome Verdadeiro</label>
              <p class="text-xl text-purple-200 font-serif italic mb-8 animate-in">"Aproxime-se... O que o espelho reflete? Qual é o nome do seu império?"</p>
              <input id="storeName8" type="text" [(ngModel)]="storeName" class="w-full bg-transparent border-b-2 border-purple-500/50 text-center text-2xl text-white py-2 focus:outline-none focus:border-purple-400 transition-colors placeholder:text-purple-300/30" placeholder="Seu Nome Verdadeiro" />
              <button (click)="nextStep()" [disabled]="!storeName" class="mt-8 px-8 py-3 bg-purple-900/50 hover:bg-purple-800/80 border border-purple-500/50 text-purple-200 rounded-full transition-all disabled:opacity-30">Revelar</button>
            }
            
            @if (step === 2) {
              <label for="domain8" class="sr-only">Domínio</label>
              <p class="text-xl text-purple-200 font-serif italic mb-8 animate-in">"E em qual plano mágico seus clientes o encontrarão?"</p>
              <div class="flex items-end border-b-2 border-purple-500/50 pb-2">
                <input id="domain8" type="text" [(ngModel)]="domain" class="w-full bg-transparent text-right text-xl text-white focus:outline-none placeholder:text-purple-300/30" placeholder="dominio" />
                <span class="text-purple-400/70 ml-1">.magia.app</span>
              </div>
              <div class="flex gap-4 mt-8 justify-center">
                <button (click)="prevStep()" class="px-6 py-3 border border-purple-500/30 text-purple-300 rounded-full hover:bg-purple-900/30 transition-all">Voltar</button>
                <button (click)="nextStep()" [disabled]="!domain" class="px-8 py-3 bg-purple-900/50 hover:bg-purple-800/80 border border-purple-500/50 text-purple-200 rounded-full transition-all disabled:opacity-30">Conjurar</button>
              </div>
            }

            @if (step === 3) {
              <p class="text-2xl text-purple-200 font-serif italic mb-8 animate-in">"O feitiço está feito. Seu destino aguarda."</p>
              <button class="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(168,85,247,0.6)]">Atravessar o Espelho</button>
            }
          </div>
        </div>
      </div>
    </main>
  `
})
export class SetupVar8Component {
  step = 1;
  storeName = '';
  domain = '';
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var9',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center font-sans relative bg-[#2a241c]">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 mix-blend-multiply" alt="Background" />
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <div class="relative z-10 w-full max-w-2xl p-8">
        <!-- Parchment Map UI -->
        <div class="bg-[#e8dcc4] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#c4b59d] p-10 relative overflow-hidden">
          <!-- Fold lines -->
          <div class="absolute inset-0 opacity-10 pointer-events-none border-x border-[#8b7355] w-1/2 mx-auto"></div>
          <div class="absolute inset-0 opacity-10 pointer-events-none border-y border-[#8b7355] h-1/2 my-auto"></div>

          <div class="text-center mb-10 relative z-20">
            <span class="material-icons text-5xl text-[#8b7355] mb-2">explore</span>
            <h1 class="font-display text-4xl font-bold text-[#4a3b2c] uppercase tracking-widest">Mesa de Guerra</h1>
            <p class="text-[#8b7355] italic mt-2">Planeje sua expansão territorial.</p>
          </div>

          <div class="relative z-20">
            @if (step === 1) {
              <div class="animate-in">
                <label for="storeName9" class="block text-[#4a3b2c] font-bold uppercase tracking-wider mb-2">Nome do Território (Loja)</label>
                <input id="storeName9" type="text" [(ngModel)]="storeName" class="w-full bg-transparent border-b-2 border-[#8b7355] text-2xl text-[#2a241c] py-2 focus:outline-none focus:border-[#4a3b2c] transition-colors placeholder:text-[#8b7355]/50" placeholder="Ex: Forte dos Lanches" />
                <button (click)="nextStep()" [disabled]="!storeName" class="mt-8 w-full py-4 bg-[#4a3b2c] hover:bg-[#2a241c] text-[#e8dcc4] font-bold uppercase tracking-widest transition-colors disabled:opacity-50">Marcar no Mapa</button>
              </div>
            }
            
            @if (step === 2) {
              <div class="animate-in">
                <label for="domain9" class="block text-[#4a3b2c] font-bold uppercase tracking-wider mb-2">Rota de Suprimentos (Subdomínio)</label>
                <div class="flex items-end border-b-2 border-[#8b7355] pb-2 focus-within:border-[#4a3b2c] transition-colors">
                  <input id="domain9" type="text" [(ngModel)]="domain" class="w-full bg-transparent text-2xl text-[#2a241c] focus:outline-none placeholder:text-[#8b7355]/50" placeholder="fortedoslanches" />
                  <span class="text-[#8b7355] font-bold">.mapa.app</span>
                </div>
                <div class="flex gap-4 mt-8">
                  <button (click)="prevStep()" class="px-6 py-4 border-2 border-[#8b7355] text-[#4a3b2c] font-bold uppercase tracking-widest hover:bg-[#8b7355]/10 transition-colors">Recuar</button>
                  <button (click)="nextStep()" [disabled]="!domain" class="flex-1 py-4 bg-[#4a3b2c] hover:bg-[#2a241c] text-[#e8dcc4] font-bold uppercase tracking-widest transition-colors disabled:opacity-50">Avançar Tropas</button>
                </div>
              </div>
            }

            @if (step === 3) {
              <div class="animate-in text-center">
                <h2 class="text-2xl text-[#4a3b2c] font-bold mb-6">Território Conquistado!</h2>
                <button class="px-8 py-4 bg-[#8b7355] hover:bg-[#4a3b2c] text-[#e8dcc4] font-bold uppercase tracking-widest transition-colors shadow-lg">Inspecionar Tropas</button>
              </div>
            }
          </div>
        </div>
      </div>
    </main>
  `
})
export class SetupVar9Component {
  step = 1;
  storeName = '';
  domain = '';
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var10',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-end justify-center font-sans relative bg-black pb-12">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-60" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <div class="relative z-10 w-full max-w-4xl flex items-end gap-6 px-4">
        <!-- Goblin Avatar -->
        <div class="w-40 h-40 md:w-56 md:h-56 shrink-0 drop-shadow-[0_0_20px_rgba(22,163,74,0.4)]">
          <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Snitch&backgroundColor=transparent" class="w-full h-full object-contain" alt="Character" />
        </div>

        <!-- Dialogue Box -->
        <div class="flex-1 bg-zinc-900/95 border-2 border-green-800 rounded-2xl p-6 shadow-[0_0_30px_rgba(22,163,74,0.2)] relative">
          <div class="absolute -top-4 left-8 bg-green-900 text-green-100 px-4 py-1 rounded-full text-sm font-bold border border-green-500">
            Snitch, o Contrabandista
          </div>

          @if (step === 1) {
            <div class="animate-in">
              <label for="storeName10" class="sr-only">Nome da loja</label>
              <p class="text-lg text-zinc-300 italic mb-4">"Psst! Ei, você aí... Quer abrir um negócio sem pagar as taxas do Rei? Hehe. Me diz, como vão chamar o seu buraco... digo, sua loja?"</p>
              <div class="flex gap-4">
                <input id="storeName10" type="text" [(ngModel)]="storeName" class="flex-1 bg-black border border-green-900 focus:border-green-500 rounded p-3 text-green-400 outline-none" placeholder="Nome da loja..." />
                <button (click)="nextStep()" [disabled]="!storeName" class="px-6 bg-green-800 hover:bg-green-700 text-white font-bold rounded disabled:opacity-50">Falar</button>
              </div>
            </div>
          }
          
          @if (step === 2) {
            <div class="animate-in">
              <label for="domain10" class="sr-only">Código secreto</label>
              <p class="text-lg text-zinc-300 italic mb-4">"Hehehe, gostei. Agora, qual vai ser o código secreto pra galera achar a loja? O subdomínio, sabe?"</p>
              <div class="flex gap-4">
                <div class="flex-1 flex bg-black border border-green-900 focus-within:border-green-500 rounded overflow-hidden">
                  <input id="domain10" type="text" [(ngModel)]="domain" class="w-full bg-transparent p-3 text-green-400 outline-none" placeholder="codigo-secreto" />
                  <span class="text-green-800 p-3 bg-zinc-950">.beco.app</span>
                </div>
                <button (click)="prevStep()" class="px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded"><span class="material-icons">undo</span></button>
                <button (click)="nextStep()" [disabled]="!domain" class="px-6 bg-green-800 hover:bg-green-700 text-white font-bold rounded disabled:opacity-50">Confirmar</button>
              </div>
            </div>
          }

          @if (step === 3) {
            <div class="animate-in flex items-center justify-between">
              <p class="text-lg text-zinc-300 italic">"Feito! O esquema tá armado. Agora entra lá antes que a guarda chegue!"</p>
              <button class="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded shadow-[0_0_15px_rgba(22,163,74,0.5)]">Entrar no Beco</button>
            </div>
          }
        </div>
      </div>
    </main>
  `
})
export class SetupVar10Component {
  step = 1;
  storeName = '';
  domain = '';
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}

@Component({
  selector: 'app-setup-var11',
  imports: [RouterLink, FormsModule],
  template: `
    <main class="min-h-screen flex items-center justify-center font-sans relative bg-black">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-black/80"></div>
      </div>
      
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>

      <div class="relative z-10 text-center w-full max-w-lg p-8">
        <div class="w-32 h-32 mx-auto mb-8 rounded-full bg-indigo-500/20 blur-xl animate-pulse absolute left-1/2 -translate-x-1/2 top-0"></div>
        
        <div class="relative z-20 bg-indigo-950/40 backdrop-blur-md border border-indigo-500/30 p-10 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          @if (step === 1) {
            <div class="animate-in">
              <label for="storeName11" class="sr-only">Nome da Visão</label>
              <p class="text-2xl text-indigo-200 font-serif italic mb-8">"As névoas do tempo se dissipam... Eu vejo um grande comércio surgindo. Qual nome as estrelas sussurram para ele?"</p>
              <input id="storeName11" type="text" [(ngModel)]="storeName" class="w-full bg-transparent border-b border-indigo-400/50 text-center text-3xl text-white py-2 focus:outline-none focus:border-indigo-300 transition-colors placeholder:text-indigo-300/20" placeholder="Nome da Visão" />
              <button (click)="nextStep()" [disabled]="!storeName" class="mt-10 px-10 py-3 bg-indigo-600/50 hover:bg-indigo-500/80 text-white rounded-full transition-all disabled:opacity-30 border border-indigo-400/50">Consultar os Astros</button>
            </div>
          }
          
          @if (step === 2) {
            <div class="animate-in">
              <label for="domain11" class="sr-only">Domínio</label>
              <p class="text-2xl text-indigo-200 font-serif italic mb-8">"Os caminhos do destino precisam de uma âncora. Qual será o seu domínio no éter?"</p>
              <div class="flex items-end border-b border-indigo-400/50 pb-2 justify-center">
                <input id="domain11" type="text" [(ngModel)]="domain" class="bg-transparent text-right text-2xl text-white focus:outline-none placeholder:text-indigo-300/20 w-1/2" placeholder="dominio" />
                <span class="text-indigo-300/70 text-xl ml-1">.oraculo.app</span>
              </div>
              <div class="flex gap-4 mt-10 justify-center">
                <button (click)="prevStep()" class="px-6 py-3 text-indigo-300 hover:text-white transition-colors">Voltar no Tempo</button>
                <button (click)="nextStep()" [disabled]="!domain" class="px-10 py-3 bg-indigo-600/50 hover:bg-indigo-500/80 text-white rounded-full transition-all disabled:opacity-30 border border-indigo-400/50">Selar o Destino</button>
              </div>
            </div>
          }

          @if (step === 3) {
            <div class="animate-in">
              <span class="material-icons text-6xl text-indigo-400 mb-6">visibility</span>
              <p class="text-2xl text-indigo-200 font-serif italic mb-8">"A profecia se cumpriu. O futuro da sua loja agora é o presente."</p>
              <button class="px-10 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(99,102,241,0.6)]">Despertar</button>
            </div>
          }
        </div>
      </div>
    </main>
  `
})
export class SetupVar11Component {
  step = 1;
  storeName = '';
  domain = '';
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}
