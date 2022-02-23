import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {//respetando el cilo de vida de angular para el renderizado


  @ViewChild("identificadorH1") private miId!: ElementRef; //captturamos el elemneto h1 del html
  @ViewChild("myInput") public input!: ElementRef;

  title = 'viewchild';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.miId.nativeElement.innerText = "Se va cambiar el mensaje";
    }, 2000);

    this.input.nativeElement.focus();

  }

  addMensaje(){
    alert("..."+this.input.nativeElement.value);
  }
}
