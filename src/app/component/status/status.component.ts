import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-st',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() status :number;
  @Output() changeStatus:EventEmitter<number>;
  constructor(

  ) {
    this.status=0
    this.changeStatus=new EventEmitter();
  }

  ngOnInit(): void {
  }
  changStatus(status:number){
    this.changeStatus.emit(status);

  }


}
