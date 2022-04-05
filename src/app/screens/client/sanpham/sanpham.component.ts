import { Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/service/sanpham.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
sanpham :any;
  constructor(private sp:SanphamService) { }

  ngOnInit(): void {
    this.hien()
  }
  hien(){
    this.sp.getsanpham().subscribe(data=>{
      this.sanpham=data
    })
  }
}
