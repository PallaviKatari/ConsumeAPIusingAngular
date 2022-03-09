import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumeAPIusingAngular';
  value: any ;
 clearValue() {
   this.value="";
 }
 value1:any;
 clearValue1() {
   this.value1="";
 }
 paymentHandler: any = null;
 
 constructor() {}
  ngOnInit() {
    this.invokeStripe();
  }
 
 makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Insurance',
    description: '5 Policies',
    amount: amount ,
  });
}

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}
 
 
}
