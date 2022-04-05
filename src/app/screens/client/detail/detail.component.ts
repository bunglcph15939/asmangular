import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from 'src/app/service/sanpham.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:undefined|number;
  sanpham:any
  constructor(
    private sp:SanphamService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.sp.getsanphamId(this.id).subscribe(data => {
      this.sanpham = data;
    })
  }

}
