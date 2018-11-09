declare var FB: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'content-merc';

  ngOnInit(){

    (<any>window).fbAsyncInit = ()=> {
        FB.init({
          appId            : '1107956112715636',
          //autoLogAppEvents : true,
          xfbml            : false,
          version          : 'v2.9'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  public fbLogin(){
        // this.router.navigate(['./home']);
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                console.log("x")
            }
            else {
                FB.login((loginResponse)=>{
                    console.log("y")
                });
            }
        });
    }
}
