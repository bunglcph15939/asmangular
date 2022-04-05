import { Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/service/sanpham.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    sanpham:any
    al=false

  constructor(private sp:SanphamService,

    ) {

    }

  ngOnInit(): void {
    this.hien()
  }
  hien(){
    this.sp.getsanpham().subscribe(data=>{
      this.sanpham=data
    })
  }
  dele(id:any){
  const check=confirm("Bạn có muốn xóa sản phẩm ??");
    if( check==true){
      this.sp.deleteSanpham(id).subscribe(data=>{
        this.hien()
        this.al=true
        console.log(this.al)

      })
    }

  }
  parentChangstatus(newStatus:number,aa:any){

    console.log(newStatus,aa)
    this.sp.updateSanpham(aa.id,{
      ...aa,
      status:newStatus
    }).subscribe(data=>{
      this.hien();
    })
}


}
