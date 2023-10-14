import { Component } from '@angular/core';
import { aupair } from './aupair.model';
import { AupairService} from './service';
import { countryData, aupairCountryData, monthData, yearData , hostKidAgeGroupData, educationData, durationOfStayData} from './aupair.options'; 

@Component({
  selector: 'app-aupair',
  templateUrl: './asearch.component.html',
  styleUrls: ['./aupair.component.css']
})

export class ASearchComponent {
  user: aupair = {
    FirstName: '',
    LastName: '',
    Email: '',
    Gender: '',
    Age: 0,
    PhoneNumber: '',
    PresentCity: '',
    PresentCountry: 0,
    CitizenOf: 0,
    Profession: '',
    Education: '',
    Religion: 0,
    DurationOfStay: 0,
    AvailableFromMonth: 0,
    AvailableFromYear: 0, 
    CanSwim: false,
    CanBike: false,
    DrivingLicence: false,
    NonSmoker: false,
    SpecialNeedPeople: '',
    CreatedIP: '',
    Rematch: 0,
    AupairDescription: '',
    LetterToHost: '',
    Experience: ''
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
dobAupair: number[] = yearData(1980, 2010); 
dobAupairselected: number = 1995; 
toolTipCitizenOf: string = "Citizenship in your Passport";
toolTipPresentCountry: string = "Country where you live now";
toolTipPrefferedCountry: string = "Countries where you like to be an Au pair";
toolTipPreferredAgeGroup: string = "Age of Host kids";
toolTipAvailableFrom: string = "Au pair job available from";
toolTipDurationOfStay: string = "For how long you want to be an Au pair for a family";

objuser: aupair =  this.user;  
constructor(private AupairService: AupairService) {}  
ngOnInit(): void {}  
onSubmit() {  
    this.AupairService.saveAupair(this.objuser).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
     });
  };


}
