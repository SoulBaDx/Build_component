import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-zinc-950 text-zinc-200 p-8 font-sans relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-600/20 blur-[120px]"></div>
        <div class="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-red-900/20 blur-[120px]"></div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16 mt-8">
          <h1 class="text-5xl font-bold text-amber-500 mb-4 font-display tracking-wider">Setup da Taverna</h1>
          <p class="text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-8">
            Escolha um dos modelos de configuração inicial (Onboarding) para a sua loja de delivery.
          </p>
          <a href="/rpg-templates.zip" download class="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-amber-900/20">
            <span class="material-icons">download</span>
            Baixar Código (Angular + Next.js)
          </a>
        </div>

        <h2 class="font-display text-2xl text-white border-b border-zinc-800 pb-2 mb-8 uppercase tracking-widest">Estilo Clássico / SaaS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          @for (v of variations; track v.path) {
            <a [routerLink]="v.path" class="group block relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-amber-500/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(217,119,6,0.15)] backdrop-blur-sm">
              <div class="aspect-[4/3] relative overflow-hidden">
                <img [src]="v.image" alt="{{v.name}}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <span class="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/30 backdrop-blur-md mb-2 inline-block">{{ v.style }}</span>
                  <h3 class="text-2xl font-bold text-white font-display">{{ v.name }}</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-sm text-zinc-400 mb-6">{{ v.desc }}</p>
                <div class="flex items-center text-amber-500 font-medium text-sm group-hover:text-amber-400 transition-colors">
                  Visualizar Setup <span class="material-icons text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>
          }
        </div>

        <h2 class="font-display text-2xl text-white border-b border-zinc-800 pb-2 mb-8 uppercase tracking-widest">Estilo Cutscene / RPG Interativo</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          @for (v of cutsceneVariations; track v.path) {
            <a [routerLink]="v.path" class="group block relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-amber-500/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(217,119,6,0.15)] backdrop-blur-sm">
              <div class="aspect-[4/3] relative overflow-hidden">
                <img [src]="v.image" alt="{{v.name}}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <span class="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/30 backdrop-blur-md mb-2 inline-block">{{ v.style }}</span>
                  <h3 class="text-2xl font-bold text-white font-display">{{ v.name }}</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-sm text-zinc-400 mb-6">{{ v.desc }}</p>
                <div class="flex items-center text-amber-500 font-medium text-sm group-hover:text-amber-400 transition-colors">
                  Visualizar Setup <span class="material-icons text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>
          }
        </div>

      </div>
    </div>
  `
})
export class IndexComponent {
  variations = [
    { 
      path: '/setup1', 
      name: 'O Pergaminho Clássico', 
      style: 'Centralizado / RPG', 
      desc: 'Um formulário centralizado com bordas temáticas, fundo de taverna iluminada e inputs estilizados como pergaminho escuro.',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup2', 
      name: 'A Jornada Dividida', 
      style: 'Split Screen / Moderno', 
      desc: 'Metade da tela exibe a taverna escura, enquanto a outra metade apresenta um formulário limpo, escuro e focado na conversão.',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup3', 
      name: 'Magia de Vidro', 
      style: 'Glassmorphism / Elegante', 
      desc: 'Um modal de vidro fosco flutuando sobre a taverna à luz de velas, com inputs flutuantes e design minimalista.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop' 
    }
  ];

  cutsceneVariations = [
    { 
      path: '/setup4', 
      name: 'A Recepcionista', 
      style: 'Visual Novel', 
      desc: 'Estilo JRPG/Visual Novel. A Elara te guia passo a passo com uma caixa de diálogo na parte inferior.',
      image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup5', 
      name: 'A Forja de Grom', 
      style: 'Balão de Fala / Ação', 
      desc: 'O ferreiro Grom conversa com você através de balões de fala em um painel interativo lado a lado.',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup6', 
      name: 'O Decreto Real', 
      style: 'Cinematic / Letterbox', 
      desc: 'Estilo cinemático com barras pretas (letterbox) e legendas na parte inferior. O formulário brilha no centro.',
      image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup7', 
      name: 'Guilda dos Mercadores', 
      style: 'Transição / Diálogo', 
      desc: 'Transição do exterior para o interior da guilda, com a recepcionista Lyra te guiando.',
      image: 'https://images.unsplash.com/photo-1590005354167-6da97ce231ce?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup8', 
      name: 'O Espelho Mágico', 
      style: 'Adivinhação / Místico', 
      desc: 'Um espelho mágico revela o futuro da sua loja em um ambiente místico e roxo.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup9', 
      name: 'Mesa de Guerra', 
      style: 'Mapa / Estratégia', 
      desc: 'Planeje sua expansão territorial em um mapa de pergaminho sobre uma mesa de guerra.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup10', 
      name: 'O Contrabandista', 
      style: 'Beco Escuro / Diálogo', 
      desc: 'Snitch, o goblin contrabandista, te ajuda a abrir uma loja "por baixo dos panos".',
      image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      path: '/setup11', 
      name: 'O Oráculo', 
      style: 'Profecia / Cósmico', 
      desc: 'Consulte os astros e sele o destino da sua loja em um ambiente cósmico e estrelado.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop' 
    }
  ];
}
