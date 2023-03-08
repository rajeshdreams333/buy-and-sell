import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingDetailPageComponent } from '../listing-detail-page/listing-detail-page.component';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing:Listing|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    this.message=`Hi, I'm interested in your ${this.listing?.name}!`;
  }
  sendMessage():void{
    alert('Your message has been sent!')
    this.router.navigateByUrl('/listings'); 
  }
}
