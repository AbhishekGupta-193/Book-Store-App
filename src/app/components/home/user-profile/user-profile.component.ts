import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
   isEditMode=false;
   user={
      name:'Hanuman',
      email:'Hanuman.boddu@gmail.com',
      phone:'7569906878',
      password:'Hanuman@123'
   }

   addresses=[
     {
      Address:'Sri Sai Apartments,7th Floor,HSR Layout,560095',
      city:'Bangalore',
      state:'Karnataka',
      type:'Home'
     }
   ];


   toggleEditMode1(){
      this.isEditMode = !this.isEditMode;
      if(!this.isEditMode){
        console.log('user details saved',this.user);
      }
    }

    toggleEditMode2(){
      this.isEditMode = !this.isEditMode;
      if(!this.isEditMode){
        console.log('user details saved',this.user);
      }
    }

    addNewAddress(){
      this.addresses.push({
        Address:'Oasis Center, 4th Floor, Sony World Signal, Koramangala Intermediate Ring Road, Bangalore 560078',
        city:'Bangalore',
        state:'Karnataka',
        type:'WORK'
      });
    }

    onAddressTypeChange(index:number,type:string){
      this.addresses[index].type = type;
    }

}
