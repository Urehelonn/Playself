import { AbstractControl, ValidationErrors} from "@angular/forms";
import { UserService } from "../../service/user.service";

export class SignupValidators{

    // password must match passCon
    static passwordMatch(control: AbstractControl): ValidationErrors|null{
        let pass=control.get('password');
        let passCon=control.get('passCon');

        // console.log(pass.value+"  "+passCon.value+"  match: "+(pass.value != passCon.value));

        return (pass.value !== passCon.value) ?{passwordNotMatch:true}:null;
    };
}