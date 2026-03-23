/* 
================================================================================
INSTRUÇÕES DE ESTILO (TAILWIND CSS v4)
================================================================================
Copie o conteúdo abaixo e cole no seu arquivo global de estilos (ex: styles.css ou global.css).
O projeto utiliza Tailwind CSS v4 localmente.

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Lora", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Cinzel", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  --color-parchment: #f4e4bc;
  --color-parchment-dark: #e8d8b0;
  --color-ink: #2c1e16;
  --color-ink-light: #4a3b32;
  --color-accent: #8b0000;
  --color-accent-hover: #660000;
  --color-gold: #d4af37;
}

body {
  background-color: var(--color-parchment);
  color: var(--color-ink);
  font-family: var(--font-sans);
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
================================================================================
*/

import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeModalComponent } from './code-modal.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-setup-var12',
  imports: [RouterLink, FormsModule, CodeModalComponent, NgxMaskDirective],
  providers: [provideNgxMask()],
  template: `
    <main class="min-h-screen flex items-center justify-center p-4 relative font-sans overflow-hidden bg-black">
      
      <!-- Background Images (Crossfading based on step) -->
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="phase === 'story' && step === 1" [class.opacity-0]="phase !== 'story' || step !== 1">
        <!-- 1. FACHADA DA GUILDA -->
        <img src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Fachada da Guilda" />
      </div>
      
      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="phase === 'story' && step === 2" [class.opacity-0]="phase !== 'story' || step !== 2">
        <!-- 2. INTERIOR DA GUILDA -->
        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Interior da Guilda" />
      </div>

      <div class="absolute inset-0 z-0 transition-opacity duration-1000" [class.opacity-100]="phase === 'story' && step >= 3" [class.opacity-0]="phase !== 'story' || step < 3">
        <!-- 3. MESA DA RECEPCIONISTA -->
        <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1920&auto=format&fit=crop" class="w-full h-full object-cover opacity-40" alt="Mesa da Recepcionista" />
      </div>

      <!-- Overlay escuro para leitura -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

      <!-- Header Controls -->
      <a routerLink="/" class="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white"><span class="material-icons text-base">arrow_back</span> Retornar</a>
      <button (click)="showCode = true" class="absolute top-6 right-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity z-50 bg-amber-600/80 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-500/50 text-white shadow-lg shadow-amber-900/20"><span class="material-icons text-base">code</span> Ver Código</button>

      <!-- Phase 1: Choice -->
      @if (phase === 'choice') {
        <div class="relative z-20 flex flex-col items-center justify-center w-full max-w-md gap-6 animate-in fade-in zoom-in duration-500">
          <h1 class="text-3xl md:text-4xl font-display font-bold text-amber-500 text-center mb-4 drop-shadow-lg">O Início da Jornada</h1>
          
          <button (click)="startNamePhase()" class="w-full flex items-center justify-center gap-3 px-8 py-4 font-display text-xl font-bold text-[#f4ecd8] bg-[#d97706] border-2 border-amber-900 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:bg-amber-500 hover:scale-105 transition-all duration-300 uppercase tracking-widest rounded-lg">
            <span class="material-icons">storefront</span>
            Ir para Guilda dos Mercadores
          </button>
          
          <button (click)="skipInteraction()" class="w-full flex items-center justify-center gap-3 px-8 py-4 font-display text-lg font-bold text-zinc-400 bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 uppercase tracking-widest rounded-lg">
            <span class="material-icons">skip_next</span>
            Pular Interação
          </button>
        </div>
      }

      <!-- Phase 2: Name Collection -->
      @if (phase === 'name') {
        <div class="relative z-20 flex flex-col items-center justify-center w-full max-w-md gap-6 animate-in fade-in zoom-in duration-500">
          <div class="bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] w-full">
            <h2 class="text-2xl font-display font-bold text-amber-500 text-center mb-6">Identificação</h2>
            
            <div class="mb-6">
              <label class="block font-display font-bold text-sm uppercase tracking-wider mb-2 text-amber-200/70">Seu Nome de Mercador</label>
              <input type="text" [(ngModel)]="merchantName" placeholder="Ex: Thorin Escudo-de-Carvalho" class="w-full bg-zinc-950 border-2 border-amber-900/50 focus:border-amber-500 text-amber-50 px-4 py-3 outline-none transition-colors font-sans text-lg rounded-lg" />
            </div>

            <button (click)="startStoryPhase()" [disabled]="!merchantName.trim()" class="w-full flex items-center justify-center gap-3 px-8 py-4 font-display text-xl font-bold text-[#f4ecd8] bg-[#d97706] border-2 border-amber-900 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:bg-amber-500 disabled:opacity-50 disabled:hover:bg-[#d97706] disabled:hover:scale-100 hover:scale-105 transition-all duration-300 uppercase tracking-widest rounded-lg">
              <span class="material-icons">check</span>
              Confirmar
            </button>
          </div>
        </div>
      }

      <!-- Phase 3: Story & Forms -->
      @if (phase === 'story') {
        <div class="relative z-20 w-full h-full flex flex-col justify-between pt-20 pb-8 px-4 max-w-6xl mx-auto">
          
          <!-- Form Area (Centered vertically in the remaining space) -->
          <div class="flex-1 flex items-center justify-center">
            @if (step >= 3 && step <= 6) {
              <div class="w-full max-w-4xl bg-[#f4ecd8] rounded-sm shadow-2xl border-4 border-[#2c1e16] p-6 md:p-8 text-[#2c1e16] animate-in fade-in zoom-in duration-700 max-h-[60vh] overflow-y-auto">
                <div class="text-center mb-6 border-b-2 border-[#2c1e16]/20 pb-4">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wider">Registro da Guilda - Parte {{ step - 2 }} de 4</h2>
                <p class="text-[#5a4634] italic text-sm">Preencha com pena e tinta.</p>
              </div>

              <form class="space-y-5">
                @if (step === 3) {
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="md:col-span-2">
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Nome da Taverna / Loja</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">Como os clientes conhecem o seu estabelecimento no dia a dia.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" [(ngModel)]="storeName" name="storeName" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Nome Fantasia</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O nome comercial da sua loja, caso seja diferente do nome comum.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" [(ngModel)]="fantasyName" name="fantasyName" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Razão Social</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O nome jurídico registrado nos documentos da sua guilda.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" [(ngModel)]="companyName" name="companyName" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">CNPJ</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O número de registro oficial do seu negócio. Apenas números.</p>
                              </div>
                            </div>
                            <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" mask="00.000.000/0000-00" [(ngModel)]="cnpj" name="cnpj" placeholder="00.000.000/0000-00" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Domínio Mágico</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O nome que aparecerá no link da sua loja. Use letras minúsculas e sem espaços.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-stretch">
                        <input type="text" [(ngModel)]="domain" name="domain" class="w-full bg-[#e8decc] border-2 border-r-0 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                        <div class="bg-[#2c1e16] text-[#f4ecd8] px-3 py-2 border-2 border-[#2c1e16] flex items-center font-bold text-sm">
                          .taverna.app
                        </div>
                      </div>
                      @if (domain) {
                        <p class="mt-2 text-sm font-bold text-emerald-700">Seu link será: {{ getAccessLink() }}</p>
                      }
                    </div>
                  </div>
                }

                @if (step === 4) {
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Telefone da Loja</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O número principal para contato com o estabelecimento.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" mask="(00) 0000-0000||(00) 00000-0000" [(ngModel)]="storePhone" name="storePhone" placeholder="(00) 00000-0000" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">WhatsApp da Loja</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O número de WhatsApp para receber mensagens dos clientes.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" mask="(00) 00000-0000" [(ngModel)]="storeWhatsapp" name="storeWhatsapp" placeholder="(00) 00000-0000" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div class="md:col-span-2">
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">E-mail da Loja</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">Endereço eletrônico para contato formal com a loja.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="email" [(ngModel)]="storeEmail" name="storeEmail" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div class="md:col-span-2 mt-2">
                      <div class="flex items-center gap-2 mb-3">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Canais de Atendimento Ativos</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-[-10px] md:left-1/2 md:-translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">Marque as formas como você atende seus clientes hoje.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-[18px] md:left-1/2 md:-translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-6">
                        <label class="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" [(ngModel)]="channels.delivery" name="delivery" class="w-5 h-5 accent-[#d97706]" />
                          <span class="font-sans font-bold text-[#2c1e16]">Delivery</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" [(ngModel)]="channels.pickup" name="pickup" class="w-5 h-5 accent-[#d97706]" />
                          <span class="font-sans font-bold text-[#2c1e16]">Retirada</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" [(ngModel)]="channels.local" name="local" class="w-5 h-5 accent-[#d97706]" />
                          <span class="font-sans font-bold text-[#2c1e16]">Consumo Local</span>
                        </label>
                      </div>
                    </div>
                  </div>
                }

                @if (step === 5) {
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">CEP</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O Código de Endereçamento Postal da sua localização.</p>
                              </div>
                            </div>
                            <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" mask="00000-000" [(ngModel)]="cep" name="cep" placeholder="00000-000" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div class="md:col-span-2">
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Rua / Avenida</label>
                      <input type="text" [(ngModel)]="street" name="street" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Número</label>
                      <input type="text" [(ngModel)]="number" name="number" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div class="md:col-span-2">
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Complemento</label>
                      <input type="text" [(ngModel)]="complement" name="complement" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Bairro</label>
                      <input type="text" [(ngModel)]="neighborhood" name="neighborhood" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Cidade</label>
                      <input type="text" [(ngModel)]="city" name="city" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">UF</label>
                      <input type="text" mask="SS" [dropSpecialCharacters]="false" [(ngModel)]="state" name="state" placeholder="EX" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg uppercase" />
                    </div>
                  </div>
                }

                @if (step === 6) {
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="md:col-span-2">
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">Nome do Responsável</label>
                      <input type="text" [(ngModel)]="responsibleName" name="responsibleName" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <label class="font-display font-bold text-sm uppercase tracking-wider text-[#5a4634]">Telefone do Responsável</label>
                        <div class="relative group flex items-center">
                          <span class="material-icons text-[16px] text-[#d97706] cursor-help opacity-70 hover:opacity-100 transition-opacity">help_outline</span>
                          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 border-2 border-amber-700/80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                            <div class="flex items-start gap-3">
                              <img [src]="getNpcAvatar()" class="w-8 h-8 rounded-full border border-amber-500/50 bg-black/50" [alt]="currentNpc.name" />
                              <div>
                                <p class="text-xs font-bold text-amber-500 mb-1">{{ currentNpc.name }} diz:</p>
                                <p class="text-xs text-amber-50 font-sans normal-case tracking-normal">O número direto da pessoa que responde pela loja.</p>
                              </div>
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-700/80"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" mask="(00) 0000-0000||(00) 00000-0000" [(ngModel)]="responsiblePhone" name="responsiblePhone" placeholder="(00) 00000-0000" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                    <div>
                      <label class="block font-display font-bold text-sm uppercase tracking-wider mb-1 text-[#5a4634]">E-mail do Responsável</label>
                      <input type="email" [(ngModel)]="responsibleEmail" name="responsibleEmail" class="w-full bg-[#e8decc] border-2 border-[#2c1e16]/40 focus:border-[#d97706] px-4 py-2 outline-none transition-colors font-sans text-lg" />
                    </div>
                  </div>
                }
              </form>
            </div>
          }
          </div>

          <!-- Dialogue Area Wrapper -->
          <div class="relative w-full max-w-4xl mx-auto mt-8">
            <!-- Character Sprite (Absolute positioned to the left) -->
            <div class="absolute bottom-0 -left-4 md:-left-16 w-32 h-32 md:w-48 md:h-48 transition-all duration-500 ease-out z-50 pointer-events-none" 
                 [class.opacity-0]="step === 1"
                 [class.opacity-100]="step > 1">
              <img [src]="getNpcAvatar()" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" [alt]="currentNpc.name" />
            </div>

            <!-- Dialogue Box -->
            <div class="w-full bg-zinc-900/90 backdrop-blur-md border-4 border-amber-700/80 rounded-xl p-6 md:p-8 pl-28 md:pl-36 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative transition-all duration-500 z-40"
                 [class.translate-y-10]="!showDialog" [class.opacity-0]="!showDialog">
              
              <!-- Character Name Badge -->
              <div class="absolute -top-5 left-28 md:left-36 bg-amber-800 border-2 border-amber-500 text-amber-100 px-6 py-1 rounded-full font-display font-bold text-lg tracking-wider shadow-lg">
                {{ getCharacterName() }}
              </div>

              <!-- Action Buttons Badge -->
              <div class="absolute -top-6 right-4 md:right-8 flex items-center gap-2">
                  @if (step > 1 && step < 7) {
                    <button (click)="prevStep()" class="flex items-center gap-1 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-zinc-900/20 text-sm border-2 border-zinc-500">
                      <span class="material-icons text-sm">arrow_back</span> Voltar
                    </button>
                  }
                  @if (step < 7) {
                    <button (click)="nextStep()" class="flex items-center gap-1 px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-amber-900/20 animate-pulse text-sm border-2 border-amber-500">
                      {{ step >= 3 ? 'Próxima' : 'Continuar' }} <span class="material-icons text-sm">{{ step >= 3 ? 'edit_document' : 'arrow_forward' }}</span>
                    </button>
                  } @else {
                    <button class="flex items-center gap-1 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-900/20 text-sm border-2 border-emerald-500">
                      Concluir <span class="material-icons text-sm">check_circle</span>
                    </button>
                  }
              </div>

              <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start mt-4">
                <!-- Dialogue Text -->
                <div class="flex-1 min-h-[80px]">
                  <p class="text-xl md:text-2xl text-amber-50 font-serif leading-relaxed">
                    {{ currentText }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </main>

    @if (showCode) { <app-code-modal variation="var12" (closeEvent)="showCode = false"></app-code-modal> }
  `
})
export class SetupVar12Component implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  showCode = false;
  
  phase: 'choice' | 'name' | 'story' = 'choice';
  step = 1;
  showDialog = false;
  currentText = '';

  npcs = [
    // Etnia 1 (Pele clara)
    { name: 'Isolda', seed: 'Isolda', skinColor: 'f5d0b5' },
    { name: 'Rowena', seed: 'Rowena', skinColor: 'efcc9f' },
    { name: 'Maeve', seed: 'Maeve', skinColor: 'e2ba87' },
    // Etnia 2 (Pele parda/morena)
    { name: 'Safira', seed: 'Safira', skinColor: 'c99c62' },
    { name: 'Naila', seed: 'Naila', skinColor: 'a47539' },
    { name: 'Zahra', seed: 'Zahra', skinColor: '8c5a2b' },
    // Etnia 3 (Pele retinta/escura)
    { name: 'Amina', seed: 'Amina', skinColor: '643d19' },
    { name: 'Dandara', seed: 'Dandara', skinColor: '4a2c11' },
    { name: 'Zuri', seed: 'Zuri', skinColor: '311d0b' }
  ];
  currentNpc = this.npcs[Math.floor(Math.random() * this.npcs.length)];
  
  getNpcAvatar() {
    return `https://api.dicebear.com/9.x/adventurer/svg?seed=${this.currentNpc.seed}&skinColor=${this.currentNpc.skinColor}&backgroundColor=transparent`;
  }
  
  // Merchant Info
  merchantName = '';

  // Form Part 1
  storeName = '';
  fantasyName = '';
  companyName = '';
  domain = '';
  cnpj = '';

  // Form Part 2
  storePhone = '';
  storeWhatsapp = '';
  storeEmail = '';

  // Form Part 3
  cep = '';
  street = '';
  number = '';
  complement = '';
  neighborhood = '';
  city = '';
  state = '';

  // Form Part 4
  responsibleName = '';
  responsiblePhone = '';
  responsibleEmail = '';
  channels = {
    delivery: false,
    pickup: false,
    local: false
  };
  
  private typingTimer: ReturnType<typeof setTimeout> | undefined;
  private autoAdvanceTimer: ReturnType<typeof setTimeout> | undefined;

  get dialogues() {
    const npcName = `${this.currentNpc.name}, a Recepcionista`;
    return [
      { name: 'Guia', text: `Chegamos, ${this.merchantName || 'viajante'}. Esta é a famosa Guilda dos Mercadores. Vamos entrar e te cadastrar como um novo mercador.` },
      { name: npcName, text: `Ah, um rosto novo! Bem-vindo à Guilda, ${this.merchantName || 'mercador'}. Sou ${this.currentNpc.name}. Veio registrar seu novo estabelecimento?` },
      { name: npcName, text: 'Excelente! Por favor, preencha este primeiro pergaminho com os dados básicos da sua nova taverna.' },
      { name: npcName, text: 'Ótimo. Agora, como os clientes e fornecedores poderão contatar sua taverna?' },
      { name: npcName, text: 'Precisamos saber exatamente onde sua taverna está localizada para enviar as mercadorias.' },
      { name: npcName, text: 'Por fim, quem é o responsável legal e como a taverna vai operar?' },
      { name: npcName, text: 'Tudo certo! Seu registro foi concluído com sucesso. Bem-vindo à Guilda!' }
    ];
  }

  ngOnInit() {
    // Initialization happens when phase changes to 'story'
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
    clearTimeout(this.autoAdvanceTimer);
  }

  startNamePhase() {
    this.phase = 'name';
    this.cdr.markForCheck();
  }

  skipInteraction() {
    // Placeholder for skip interaction
    console.log('Interaction skipped. Proceeding to conventional setup...');
    // Here you would navigate to the conventional setup route
  }

  startStoryPhase() {
    this.phase = 'story';
    this.step = 1;
    this.cdr.markForCheck();
    
    setTimeout(() => {
      this.showDialog = true;
      this.typeText(this.dialogues[0].text);
      this.cdr.markForCheck();
    }, 500);
  }

  getCharacterName() {
    return this.dialogues[this.step - 1]?.name || '';
  }

  getAccessLink() {
    if (!this.domain) return '';
    const slug = this.domain.toLowerCase().replace(/[^a-z0-9-]/g, '');
    return `https://${slug}.taverna.app`;
  }

  nextStep() {
    if (this.step < 7) {
      this.step++;
      this.currentText = '';
      clearTimeout(this.typingTimer);
      clearTimeout(this.autoAdvanceTimer);
      this.typeText(this.dialogues[this.step - 1].text);
      this.cdr.markForCheck();
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
      this.currentText = '';
      clearTimeout(this.typingTimer);
      clearTimeout(this.autoAdvanceTimer);
      this.typeText(this.dialogues[this.step - 1].text);
      this.cdr.markForCheck();
    }
  }

  typeText(text: string, index = 0) {
    if (index < text.length) {
      this.currentText += text.charAt(index);
      this.cdr.markForCheck();
      this.typingTimer = setTimeout(() => this.typeText(text, index + 1), 30); // Velocidade da digitação
    } else {
      // Auto-advance after 5 seconds if on step 1 or 2 (before forms)
      if (this.step < 3) {
        this.autoAdvanceTimer = setTimeout(() => {
          this.nextStep();
        }, 5000);
      }
    }
  }
}
