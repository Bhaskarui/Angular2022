import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AccountService } from './account.service';
import { CustomValidators } from './custom.validator-reactive-form';
import { UserService } from './users-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = '15days-ui';
  servers: any = [];
  onlyOdd: boolean = false;
  numbers = [1, 2, 3, 4, 5, 6];
  oddNum = [1, 3, 5];
  evenNum = [2, 4, 6];
  value = 10;
  // value = Math.random()*100;

  serverElements = [{
    type: 'server',
    name: 'test server',
    content: 'Just a test!'
  }]
  onAddServer() {
    this.servers.push('this is another server')
  }

  onRemoveServer(index: any) {
    const position = index + 1;
    this.servers.splice(position, 1);
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onFirstChanges() {
    this.serverElements[0].name = 'Changed!'
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }


  // 84video. assignment
  oddNumbers: number[] = [];
  evenNumbers: number[] = []
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
    }

  }
  loadedFeature = 'recipe'
  onNavigation(featureNavigation: string) {
    console.log(featureNavigation);
    this.loadedFeature = featureNavigation;

  }

  constructor(private accountService: AccountService, private userService: UserService) {

  }

  accountsArray: { name: string, status: string }[] = [];
  userActivated = false;
  activatedSub?: Subscription;
  // ngOnInit(): void {
  //   this.accountsArray = this.accountService.accounts;
  //   this.activatedSub = this.userService.activatedEmitter.subscribe((dataActivated: any) => {
  //     this.userActivated = dataActivated;
  //   })
  // }

  ngOnDestroy(): void {
    this.activatedSub?.unsubscribe();
  }


  // Template driven form

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  @ViewChild('f') signupForm?: NgForm


  suggestedUserName() {
    const suggestedNmae = 'Superuser';
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedNmae,
    //     email: ''
    //   },
    //   secrete: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedNmae
      }
    })
  }

  user = {
    username: '',
    email: '',
    secreteQuestion: '',
    answer: '',
    gender: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.secreteQuestion = this.signupForm?.value.secrete;
    this.user.answer = this.signupForm?.value.questionAnswer;
    this.user.gender = this.signupForm?.value.gender;
    this.signupForm?.reset({
      userData: {
        username: ''
      }
    })
  }

  // assignment temlate driven form
  selectedSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('t') tempForm?: NgForm;
  tempFormSubmitted = false;
  tempUser = {
    email: '',
    password: '',
    subscription: '',
  }

  onSubmitForm(form: NgForm) {
    this.tempFormSubmitted = true;
    console.log(form);
    console.log(this.tempForm?.value);
    this.tempUser.email = this.tempForm?.value.email;
    this.tempUser.password = this.tempForm?.value.password;
    this.tempUser.subscription = this.tempForm?.value.subscription;
    this.tempForm?.reset();
  }

  // Reactive form starts here

  contactForm!: FormGroup;
  reactiveFormSubmitted = false;
  forbiddenUserName = ['Chris', 'Anna'];

  ngOnInit() {
    this.contactForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'email': new FormControl('', [Validators.required, Validators.email, this.fobiddenEmails]),
      }),

      'secrete': new FormControl('', [Validators.required]),
      'gender': new FormControl('male', [Validators.required]),
      'questionAnswer': new FormControl('', [Validators.required]),
      'hobbies': new FormArray([])
    });

    // this.contactForm?.valueChanges.subscribe((value:any)=>{
    //   console.log(value);
    // });

    this.contactForm?.statusChanges.subscribe((status: any) => {
      console.log(status);
    });

    this.contactForm?.setValue({
      userData: {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'secrete': '',
      'gender': 'male',
      'questionAnswer': 'Bhaskar text area',
      'hobbies': []
    });
    this.contactForm?.patchValue({
      userData: {
        'username': 'Bhaskar'

      }
    });

    // this.projectForm = new FormGroup({
    //   'projectname': new FormControl('', [Validators.required, CustomValidators.invalidprojectName]),                                                                                                                                                                                                                                                               ]),
    //   'emails': new FormControl('', [Validators.required, Validators.email]),
    //     'projectstatus': new FormControl('critical', [Validators.required])
  
    // })

    this.projectForm = new FormGroup({
      'projectname': new FormControl('', [Validators.required, CustomValidators.invalidprojectName]),
      'emails': new FormControl('', [Validators.required, Validators.email]),
      'projectstatus': new FormControl('critical', [Validators.required])
    })

  }

  


  onReactiveSubmit() {
    this.reactiveFormSubmitted = true;
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators?.required)
    return (<FormArray>this.contactForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.contactForm.get('hobbies') as FormArray).controls;
  }

  // forbiddenNames(control: FormControl): { [s: string]: boolean } {
  //   // if (this.forbiddenUserName.indexOf(control.value) !== -1) {
  //   //   return { 'nameIsForbidden': true };
  //   // }
  //   // return { 'nameIsForbidden': false }
  // }


  fobiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null)
        }

      }, 1500)
    });
    return promise

  }

  // Reactive form assignment Project
  projectForm!: FormGroup
  onSubmitProjectForm() {
    console.log(this.projectForm.value);
  }

}

