import { Component } from '@angular/core';
import { family } from './family.model';
import { MyserviceService} from './service';

import { countryData, aupairCountryData, monthData, numberData , hostKidAgeGroupData, educationData, durationOfStayData} from '../aupair/aupair.options'; 

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})

export class FamilyComponent {
  user: family = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    ResidingCity: '',
    ResidingCountry: 0,
    CitizenOf: 0,
    FacebookUrl: '',
    NoOfChildren: 0,
    DurationOfStay: 0,
    LookingFromMonth: 0,
    LookingFromYear: 0, 
    AupairAgeFrom: 0,
    AupairAgeTo: 0, 
    PocketMoney: '',
    SingleParent: false,
    CanSwim: false,
    CanBike: false,
    DrivingLicence: false,
    NonSmoker: false,
    SpecialNeedPeople: '',
    CreatedIP: '',
    FamilyDescription: '',
    JobDescription: '',
}

   genderData = [
  { text: 'Male', value: '1' },
  { text: 'Female', value: '2' },
  { text: 'Other', value: '3' }];

  Experience = "exp";

countries = countryData; 
aupairCountries = aupairCountryData; 
months = monthData;
hostKidAgeGroup = hostKidAgeGroupData;
education = educationData;
durationOfStay = durationOfStayData;
ageAupair: number[] = numberData(15, 40); 
toolTipVerification: string = "For verification only. Not to be shared with users";

objuser: family =  this.user;  
constructor(private MyserviceService: MyserviceService) {}  
ngOnInit(): void {}  
onSubmit() {  
    this.MyserviceService.enroll(this.objuser).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
     });
  };


}
