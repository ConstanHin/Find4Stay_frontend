import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectMessageService } from 'src/app/service/redirect-message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: string | undefined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private redMessage: RedirectMessageService,
  ) { }

  ngOnInit(): void {
    this.redMessage.observable.subscribe({
      next: (v) => { this.message = v },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.redMessage.observable.subscribe({
      next: (v) => { this.message = v },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

}
