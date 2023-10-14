import { Component, OnInit } from '@angular/core';
import { aupair } from './aupair.model';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AupairService} from './service';
import { countryData, aupairCountryData, monthData, yearData , numberData,languageData,hostKidAgeGroupData, educationData, durationOfStayData} from './aupair.options'; 

@Component({
  selector: 'app-aupair',
  templateUrl: './aupair.component.html',
  styleUrls: ['./aupair.component.css']
})

export class AupairComponent{
  aupairForm!: FormGroup;

  constructor(private fb: FormBuilder, private AupairService: AupairService) {
    this.initializeForm();
  
  }  
  
  initializeForm() {
    this.aupairForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      presentCountry: ['', Validators.required],
      citizenOf: ['', Validators.required]
    });
  }
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
languages = languageData;
durationOfStay = durationOfStayData;
ageAupair: number[] = numberData(15, 40); 
dobAupair: number[] = yearData(1980, 2010); 
dobAupairselected: number = 1995; 
toolTipLanguage: string = "Languages you can speak";
toolTipCitizenOf: string = "Citizenship in your Passport";
toolTipPresentCountry: string = "Country where you live now";
toolTipPrefferedCountry: string = "Countries where you like to be an Au pair";
toolTipPreferredAgeGroup: string = "Age of Host kids";
toolTipAvailableFrom: string = "Au pair job available from";
toolTipDurationOfStay: string = "For how long you want to be an Au pair for a family";

objuser: aupair =  this.user;  


ngOnInit(): void {
  this.initializeForm();
} ;
get selectedLanguages(): number[] {
  return this.aupairForm.get('languages')!.value;
}

onSubmit() {  
  const data = {
    Aupair: this.user,
    languageIds: this.selectedLanguages
  };
    this.AupairService.saveAupair(data).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
     });
  };


}
