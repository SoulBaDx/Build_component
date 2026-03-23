import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CODE_SNIPPETS } from './code-snippets';

@Component({
  selector: 'app-code-modal',
  template: `
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8">
      <div class="bg-zinc-950 border border-zinc-800 rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900">
          <div class="flex items-center gap-4">
            <h3 class="text-white font-bold flex items-center gap-2">
              <span class="material-icons text-amber-500">code</span>
              Código Fonte
            </h3>
            <div class="h-6 w-px bg-zinc-700"></div>
            <div class="flex gap-2">
              <button (click)="tab = 'angular'" 
                      [class.bg-red-500]="tab === 'angular'" [class.text-white]="tab === 'angular'"
                      [class.bg-zinc-800]="tab !== 'angular'" [class.text-zinc-400]="tab !== 'angular'"
                      class="px-3 py-1.5 rounded-md text-xs font-bold transition-colors hover:bg-red-500 hover:text-white flex items-center gap-2">
                Angular + Tailwind
              </button>
              <button (click)="tab = 'nextjs'" 
                      [class.bg-blue-500]="tab === 'nextjs'" [class.text-white]="tab === 'nextjs'"
                      [class.bg-zinc-800]="tab !== 'nextjs'" [class.text-zinc-400]="tab !== 'nextjs'"
                      class="px-3 py-1.5 rounded-md text-xs font-bold transition-colors hover:bg-blue-500 hover:text-white flex items-center gap-2">
                Next.js + Tailwind
              </button>
            </div>
          </div>
          <button (click)="closeEvent.emit()" class="text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-full p-1 transition-colors">
            <span class="material-icons">close</span>
          </button>
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-auto p-6 bg-[#0d0d0d] text-zinc-300 font-mono text-sm relative group">
          <button (click)="copyCode()" 
                  class="absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm border border-zinc-600 transition-colors shadow-lg z-10">
            <span class="material-icons text-[18px]">{{ copied ? 'check' : 'content_copy' }}</span> 
            {{ copied ? 'Copiado!' : 'Copiar Código' }}
          </button>
          <pre class="whitespace-pre-wrap break-all pr-24"><code>{{ getCode() }}</code></pre>
        </div>
        
        <!-- Footer -->
        <div class="p-3 bg-zinc-900 border-t border-zinc-800 text-xs text-zinc-500 flex justify-between items-center">
          <span>O código utiliza Tailwind CSS para estilização.</span>
          @if (tab === 'nextjs') {
            <span>Nota: O código Next.js é gerado automaticamente e pode precisar de ajustes finos (ex: blocos condicionais).</span>
          }
        </div>
      </div>
    </div>
  `
})
export class CodeModalComponent {
  @Input() variation = '';
  @Output() closeEvent = new EventEmitter<void>();
  
  tab: 'angular' | 'nextjs' = 'angular';
  copied = false;

  getCode(): string {
    const snippets = (CODE_SNIPPETS as Record<string, Record<string, string>>)[this.variation];
    if (!snippets) return 'Código não encontrado.';
    return snippets[this.tab] || '';
  }

  copyCode() {
    navigator.clipboard.writeText(this.getCode());
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }
}
