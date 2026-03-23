import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';
import { animate } from 'motion';

interface DialogueLine {
  scene: number;
  speaker: 'Player' | 'Elara';
  name: string;
  text: string;
  monologue: boolean;
}

@Component({
  selector: 'app-setup-var19',
  imports: [RouterLink, FormsModule, CodeModalComponent],
  template: `
    <main class="relative min-h-screen bg-black overflow-hidden font-sans">
      <!-- Backgrounds -->
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="scene <= 3" [class.opacity-0]="scene > 3">
         <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-60" alt="Fora da Guilda" />
      </div>
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="scene >= 4" [class.opacity-0]="scene < 4">
         <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Dentro da Guilda" />
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

      <!-- Controls -->
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-amber-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-500/50 text-white shadow-lg shadow-amber-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <!-- Content Area -->
      <div class="relative z-20 w-full max-w-6xl mx-auto px-4 pb-8 h-screen flex flex-col justify-end">
        
        <!-- Characters -->
        <div class="flex justify-between items-end w-full mb-4 px-4 md:px-12 pointer-events-none">
          <!-- NPC (Left) -->
          <div class="w-48 h-48 md:w-72 md:h-72 transition-all duration-700 transform origin-bottom"
               [class.translate-x-0]="scene >= 4 && currentLine?.speaker === 'Elara'"
               [class.-translate-x-10]="scene >= 4 && currentLine?.speaker !== 'Elara'"
               [class.opacity-100]="scene >= 4 && currentLine?.speaker === 'Elara'"
               [class.opacity-60]="scene >= 4 && currentLine?.speaker !== 'Elara'"
               [class.scale-105]="currentLine?.speaker === 'Elara'"
               [class.brightness-110]="currentLine?.speaker === 'Elara'"
               [class.brightness-50]="currentLine?.speaker !== 'Elara'"
               [class.opacity-0]="scene < 4">
            <img src="https://api.dicebear.com/9.x/micah/svg?seed=Elara&backgroundColor=transparent" class="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]" alt="Elara" />
          </div>

          <!-- Player (Right) -->
          <div class="w-48 h-48 md:w-72 md:h-72 transition-all duration-700 transform origin-bottom flex items-end justify-end"
               [class.translate-x-0]="currentLine?.speaker === 'Player'"
               [class.translate-x-10]="currentLine?.speaker !== 'Player'"
               [class.opacity-100]="currentLine?.speaker === 'Player'"
               [class.opacity-60]="currentLine?.speaker !== 'Player' && scene >= 4"
               [class.scale-105]="currentLine?.speaker === 'Player'"
               [class.brightness-110]="currentLine?.speaker === 'Player'"
               [class.brightness-50]="currentLine?.speaker !== 'Player'"
               [class.opacity-0]="scene < 4 && currentLine?.speaker !== 'Player'">
            
            @if (playerCustomImage) {
              <div class="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-amber-500/80 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-4 md:mb-8">
                <img [src]="playerCustomImage" class="w-full h-full object-cover transition-all duration-500" [class.sepia]="applyFilter" [class.contrast-125]="applyFilter" [class.saturate-150]="applyFilter" alt="Player" />
              </div>
            } @else {
              <img [src]="playerAvatarUrl" class="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] scale-x-[-1]" alt="Player" />
            }
          </div>
        </div>

        <!-- Dialogue Box -->
        @if (scene === 3 || scene === 4) {
          <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
            
            <!-- Speaker Name -->
            <div class="absolute -top-5 bg-amber-800 border-2 border-amber-500 text-amber-100 px-6 py-1 rounded-full font-display font-bold text-lg tracking-wider shadow-lg transition-all duration-300"
                 [class.left-6]="currentLine?.speaker === 'Elara'"
                 [class.right-6]="currentLine?.speaker === 'Player'">
              {{ parsedSpeakerName }}
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-start mt-4"
                 [class.flex-row-reverse]="currentLine?.speaker === 'Player'">
              <div class="flex-1 min-h-[100px]" [class.text-right]="currentLine?.speaker === 'Player'">
                <p class="text-xl md:text-2xl text-amber-50 font-serif leading-relaxed" [class.italic]="currentLine?.monologue">
                  {{ currentText }}
                </p>
              </div>
              <div class="flex-shrink-0 self-end md:self-center">
                <button (click)="advanceDialogue()" class="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-amber-900/20">
                  Continuar <span class="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        }

        <!-- Scene 1: Name Input -->
        @if (scene === 1) {
          <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] max-w-xl mx-auto w-full text-center animate-in zoom-in-95 duration-500">
            <h2 class="text-3xl font-display text-amber-500 mb-2">Seja bem-vindo, Mercador!</h2>
            <p class="text-zinc-400 text-sm mb-8">Sua jornada comercial está prestes a começar. Como podemos chamá-lo?</p>
            
            <input type="text" [(ngModel)]="userName" placeholder="Seu nome..." class="w-full bg-black/50 border-2 border-amber-900/50 focus:border-amber-500 rounded-lg px-6 py-4 text-xl text-white text-center outline-none transition-colors mb-6 font-serif" (keyup.enter)="confirmName()" />
            
            <button (click)="confirmName()" [disabled]="!userName.trim()" class="px-8 py-4 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors shadow-lg shadow-amber-900/20 text-lg w-full flex items-center justify-center gap-2">
              Continuar <span class="material-icons">arrow_forward</span>
            </button>
          </div>
        }

        <!-- Scene 2: Avatar Selection -->
        @if (scene === 2) {
          <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] max-w-2xl mx-auto w-full flex flex-col items-center animate-in zoom-in-95 duration-500">
            <h3 class="text-2xl font-display text-amber-500 mb-2">Sua Aparência, {{userName}}</h3>
            <p class="text-zinc-400 text-sm mb-6">Como os outros mercadores verão você?</p>
            
            <!-- Avatar Preview -->
            <div class="flex flex-col items-center gap-6 w-full">
              <div class="flex flex-col items-center">
                <div class="w-48 h-48 bg-black/50 rounded-full border-4 border-amber-500/50 overflow-hidden relative shadow-inner flex items-center justify-center">
                  @if (playerCustomImage) {
                    <img [src]="playerCustomImage" class="w-full h-full object-cover transition-all duration-500" [class.sepia]="applyFilter" [class.contrast-125]="applyFilter" [class.saturate-150]="applyFilter" alt="Seu Avatar" />
                  } @else {
                    <img [src]="playerAvatarUrl" class="w-full h-full object-contain scale-110 translate-y-2" alt="Seu Avatar" />
                  }
                </div>
                @if (playerCustomImage) {
                  <button (click)="applyFilter = !applyFilter" class="text-xs text-amber-500 hover:text-amber-400 flex items-center justify-center gap-1 mt-3 transition-colors">
                    <span class="material-icons text-sm">{{ applyFilter ? 'auto_fix_off' : 'auto_fix_high' }}</span>
                    {{ applyFilter ? 'Remover Filtro Mágico' : 'Aplicar Filtro Mágico' }}
                  </button>
                }
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button (click)="randomizeAvatar()" class="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold rounded-lg transition-colors border border-amber-900/50 shadow-lg">
                  <span class="material-icons">casino</span> Rolar Aparência
                </button>
                
                <label class="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold rounded-lg transition-colors border border-amber-900/50 shadow-lg cursor-pointer">
                  <span class="material-icons">upload</span> Enviar Retrato
                  <input type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
                </label>
              </div>

              <button (click)="confirmAvatar()" class="mt-2 w-full max-w-md flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-amber-900/20 text-lg">
                Iniciar Jornada <span class="material-icons">check</span>
              </button>
            </div>
          </div>
        }

        <!-- Final Form Scene -->
        @if (scene === 5) {
          <div class="bg-[#f4ecd8] rounded-sm shadow-2xl border-4 border-[#2c1e16] p-8 text-[#2c1e16] max-w-2xl mx-auto w-full">
            <div class="text-center mb-6 border-b-2 border-[#2c1e16]/20 pb-4">
              <h2 class="font-display text-2xl font-bold uppercase tracking-wider">Registro da Guilda</h2>
              <p class="text-[#5a4634] italic text-sm">Preencha com pena e tinta, {{ userName }}.</p>
            </div>
            
            <form class="space-y-6">
              <div>
                <label for="storeName19" class="block font-display font-bold text-sm uppercase tracking-wider mb-2 text-[#5a4634]">Nome da Taverna</label>
                <input id="storeName19" type="text" [(ngModel)]="storeName" name="storeName" placeholder="Ex: O Javali Saltitante" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-3 outline-none transition-colors font-sans text-lg placeholder:text-[#2c1e16]/40" />
              </div>

              <div>
                <label for="domain19" class="block font-display font-bold text-sm uppercase tracking-wider mb-2 text-[#5a4634]">Domínio Mágico</label>
                <div class="flex items-stretch">
                  <input id="domain19" type="text" [(ngModel)]="domain" name="domain" placeholder="ojavalisaltitante" class="w-full bg-[#e8decc] border-2 border-r-0 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-3 outline-none transition-colors font-sans text-lg placeholder:text-[#2c1e16]/40" />
                  <div class="bg-[#2c1e16] text-[#f4ecd8] px-4 py-3 border-2 border-[#2c1e16] flex items-center font-bold tracking-wide">
                    .taverna.app
                  </div>
                </div>
              </div>

              <button type="button" class="w-full mt-4 group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-display text-xl font-bold text-[#f4ecd8] bg-[#d97706] border-2 border-[#2c1e16] shadow-[4px_4px_0px_0px_rgba(44,30,22,1)] hover:shadow-[2px_2px_0px_0px_rgba(44,30,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all duration-200 uppercase tracking-widest">
                <span class="material-icons">edit_document</span>
                Assinar Registro
              </button>
            </form>
          </div>
        }

      </div>
      
      <!-- Transition Overlay -->
      <div class="fixed inset-0 bg-black z-[60] pointer-events-none flex items-center justify-center" style="opacity: 0" #transitionOverlay>
         <div class="text-white font-display text-3xl tracking-widest uppercase opacity-0" #transitionText>Entrando na Guilda...</div>
      </div>
    </main>

    @if (showCode) { <app-code-modal variation="var19" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar19Component implements OnInit, OnDestroy {
  @ViewChild('transitionOverlay') transitionOverlay!: ElementRef;
  @ViewChild('transitionText') transitionText!: ElementRef;

  private cdr = inject(ChangeDetectorRef);

  showCode = false;
  scene = 1;
  lineIndex = 0;
  currentText = '';
  userName = '';
  storeName = '';
  domain = '';
  playerSeed = 'Felix';
  playerCustomImage: string | null = null;
  applyFilter = true;
  
  private typingTimer: ReturnType<typeof setTimeout> | undefined;

  get playerAvatarUrl(): string {
    return this.playerCustomImage || `https://api.dicebear.com/9.x/micah/svg?seed=${this.playerSeed}&backgroundColor=transparent`;
  }

  randomizeAvatar() {
    this.playerCustomImage = null; // Reset custom image if they roll
    const names = ['Felix', 'Balthazar', 'Lyra', 'Grom', 'Sylas', 'Kael', 'Nova', 'Orion', 'Zephyr', 'Luna', 'Draven', 'Aria'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSuffix = Math.floor(Math.random() * 1000);
    this.playerSeed = `${randomName}${randomSuffix}`;
    this.cdr.markForCheck();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.playerCustomImage = e.target?.result as string;
        this.cdr.markForCheck();
      };
      reader.readAsDataURL(file);
    }
  }

  script: DialogueLine[] = [
    // Scene 3: Outside Monologue
    { scene: 3, speaker: 'Player', name: '{{userName}}', text: 'Finalmente cheguei... A lendária Sede da Guilda dos Mercadores.', monologue: true },
    { scene: 3, speaker: 'Player', name: '{{userName}}', text: 'É ainda maior do que as lendas diziam. As torres tocam as nuvens e o pátio ferve de comerciantes de todos os reinos.', monologue: true },
    { scene: 3, speaker: 'Player', name: '{{userName}}', text: 'Certo. Sem mais delongas. É hora de abrir minha própria taverna.', monologue: true },
    
    // Scene 4: Inside Dialogue
    { scene: 4, speaker: 'Elara', name: 'Elara, a Recepcionista', text: 'Bem-vindo à Guilda dos Mercadores! O salão principal está bem movimentado hoje.', monologue: false },
    { scene: 4, speaker: 'Elara', name: 'Elara, a Recepcionista', text: 'Ah, você deve ser {{userName}}. Estávamos aguardando sua chegada.', monologue: false },
    { scene: 4, speaker: 'Player', name: '{{userName}}', text: 'Isso mesmo. Vim registrar meu novo estabelecimento.', monologue: false },
    { scene: 4, speaker: 'Elara', name: 'Elara, a Recepcionista', text: 'Excelente! Para oficializarmos, preciso que preencha este pergaminho com os detalhes da sua taverna.', monologue: false },
  ];

  get currentLine(): DialogueLine | undefined {
    return this.script[this.lineIndex];
  }

  get parsedSpeakerName(): string {
    if (!this.currentLine) return '';
    return this.currentLine.name.replace('{{userName}}', this.userName || 'Mercador');
  }

  get parsedText(): string {
    if (!this.currentLine) return '';
    return this.currentLine.text.replace(/\{\{userName\}\}/g, this.userName || 'Mercador');
  }

  ngOnInit() {
    // Start at scene 1 (Name Input), no dialogue plays yet.
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
  }

  playCurrentLine() {
    this.currentText = '';
    clearTimeout(this.typingTimer);
    const fullText = this.parsedText;
    this.typeText(fullText, 0);
  }

  typeText(text: string, index = 0) {
    if (index < text.length) {
      this.currentText += text.charAt(index);
      this.cdr.markForCheck();
      this.typingTimer = setTimeout(() => this.typeText(text, index + 1), 30);
    }
  }

  async advanceDialogue() {
    // Fast forward if typing
    if (this.currentText.length < this.parsedText.length) {
      clearTimeout(this.typingTimer);
      this.currentText = this.parsedText;
      return;
    }

    const nextIndex = this.lineIndex + 1;
    
    if (nextIndex < this.script.length) {
      const nextLine = this.script[nextIndex];
      
      if (this.scene === 3 && nextLine.scene === 4) {
         await this.transitionToInside();
      }
      
      this.scene = nextLine.scene;
      this.lineIndex = nextIndex;
      this.playCurrentLine();
      this.cdr.markForCheck();
    } else {
      // End of script, go to form
      this.scene = 5;
      this.cdr.markForCheck();
    }
  }

  confirmName() {
    if (this.userName.trim()) {
      this.scene = 2; // Go to Avatar Selection
      this.cdr.markForCheck();
    }
  }

  confirmAvatar() {
    this.scene = 3; // Start dialogue
    this.lineIndex = 0;
    this.playCurrentLine();
    this.cdr.markForCheck();
  }

  async transitionToInside() {
    const overlay = this.transitionOverlay.nativeElement;
    const text = this.transitionText.nativeElement;
    
    // Fade to black
    await animate(overlay, { opacity: 1 }, { duration: 0.8 }).finished;
    await animate(text, { opacity: 1 }, { duration: 0.5 }).finished;
    
    // Wait a bit in the dark
    await new Promise(r => setTimeout(r, 1000));
    
    // Fade out text
    await animate(text, { opacity: 0 }, { duration: 0.5 }).finished;
    
    // Fade back in (background will be updated because scene changes right after this returns)
    setTimeout(async () => {
      await animate(overlay, { opacity: 0 }, { duration: 0.8 }).finished;
    }, 100);
  }
}
