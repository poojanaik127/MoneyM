import { Component ,ElementRef,Renderer2} from '@angular/core';
import { FormGroup,Validators,FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-form',
  templateUrl: './login-signup-form.component.html',
  styleUrls: ['./login-signup-form.component.css']
})
export class LoginSignupFormComponent {
  otp:string='';
  showOTPInput:boolean=false;
  myForm:FormGroup;
  myForm2:FormGroup;
  

  constructor(private formBuilder:FormBuilder,private renderer:Renderer2,private el:ElementRef,private router:Router){
    this.myForm=this.formBuilder.group({
    fullname:['',[Validators.required,Validators.minLength(10)]],
    mbno:['',[Validators.required,this.fixedLenValidator(10)]],
    otp:['',[Validators.required,this.fixedLenValidator(4)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required]],
  },{
    validator:this.passwordMatchValidator
  })

 


  this.myForm2=this.formBuilder.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
    password:['',[Validators.required,Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
 
  })

  }


  fixedLenValidator(length:number){
    return(control)=>{
      const value=control.value;

      if(value===null || value===undefined || value===''){
        return null;
      }
      const isValid=value.length===length;
      return isValid?null:{fixedLen:{reqlen:length,actuallen:value.length}};
    }
    
  }

  passwordMatchValidator(FormGroup:FormGroup)
  {
    const pass=FormGroup.get('password').value;
    const cpass=FormGroup.get('cpassword').value;

    if(pass==cpass){
      return null;
    }
    else{
      return {mismatch:true};
    }

  }


  submitSignUpForm(){
    if(this.myForm.valid){
      alert(this.myForm.value);
    }
  }
  submitSignInForm(){
    if(this.myForm2.valid){
      alert(this.myForm.value);
    }
  }



  ngAfterViewInit()
  {
    const signUpButton=this.el.nativeElement.querySelector('#signUp');
    const signInButton=this.el.nativeElement.querySelector('#signIn');
    const container=this.el.nativeElement.querySelector('#container');

    this.renderer.listen(signUpButton,'click',()=>{
      this.renderer.addClass(container,'right-panel-active');
    });

    this.renderer.listen(signInButton,'click',()=>{
      this.renderer.removeClass(container,'right-panel-active');
    });

  }

  sendOTP()
  {
    
    this.showOTPInput=true;
   
  }

  login()
  {
    alert("....................");
    this.router.navigate(['/dashboard']);
  }

}
