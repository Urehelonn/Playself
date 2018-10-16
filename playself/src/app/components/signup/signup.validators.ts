import { AbstractControl, ValidationErrors} from "@angular/forms";

export class SignupValidators{

    // user name must be unique
    static usernameUnique(control: AbstractControl): ValidationErrors|null{
        // need to implement later with search through database
        if(control.value!=='1234'){
            return({usernameNotUnique:true});
        }

        return null;
    };

    // password must match passCon
    static passwordMatch(control: AbstractControl): ValidationErrors|null{
        let pass=control.get('password');
        let passCon=control.get('passCon');

        console.log(pass.value+"  "+passCon.value+"  match: "+(pass.value != passCon.value));

        return (pass.value !== passCon.value) ?{passwordNotMatch:true}:null;
    };
}