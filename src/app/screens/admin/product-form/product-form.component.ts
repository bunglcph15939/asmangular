import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from 'src/app/service/sanpham.service';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
id:undefined|number;
sanpham:any;
sanphamForm:FormGroup;
  constructor(
    private sp:SanphamService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.sanphamForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)


    })
   }



  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.sp.getsanphamId(this.id).subscribe(data => {
        this.sanpham = data;
      })
    } else {
      this.sanpham = {
        name: '',
        description: "",
        image: "",
        status: 0,
        price:0
      }
    }
  }

  onSubmit(obj:any){
    if (this.id) {
      return this.sp.updateSanpham(this.id, obj).subscribe(data => {
        this.router.navigate(['/admin/product']);
      });
    }

    return this.sp.createSanpham(obj).subscribe(data => {
      this.router.navigate(['/admin/product']);
    });
  }

}
