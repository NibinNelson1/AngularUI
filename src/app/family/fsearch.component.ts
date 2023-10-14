import { Component } from '@angular/core';
import { family } from './family.model';
import { countryData, aupairCountryData, monthData, numberData , hostKidAgeGroupData, educationData, durationOfStayData} from '../aupair/aupair.options'; 

@Component({
  selector: 'app-family',
  templateUrl: './fsearch.component.html',
  styleUrls: ['./family.component.css']
})

export class FSearchComponent {
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

countries = countryData; 
ageAupairFrom: number[] = numberData(15, 40); 
ageAupairTo: number[] = numberData(16, 40); 
 
}
