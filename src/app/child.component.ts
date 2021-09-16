import { Component, Input } from '@angular/core';

@Component({
    selector:'abe-child',
    template:'<span class="circle" display="inline-block" width="600" height="600"></span>'
    //template:'<div class="circle" width=10 [style.background]="color"></div>'
    //template:'<div>Hola {{color}} {{size}}</div>'
})

export class ChildCompo {
    @Input() size!: number;
    @Input() color!: string;
}