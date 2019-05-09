import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MyAcoountService } from 'src/app/service/account/my-acoount.service';
// import { Action } from 'rxjs/internal/scheduler/Action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-room',
  templateUrl: './your-room.component.html',
  styleUrls: ['./your-room.component.css']
})
export class YourRoomComponent implements OnInit {
  myRoom: FormGroup
  roomArr: Array<FormGroup> =[];
  selectedIndex: any;
  selectedIndexP: any;
  // length: string;
  projectRoomDataArr: any;
  roomDataArr:any;
  inc: number = 0;
  show: boolean;

  select(index: any) {
      this.selectedIndex = index; 
        this.selectedIndexP=0;
  }
 
  status: boolean = false;
  
  
  constructor(private fb: FormBuilder,
              public myAccountService: MyAcoountService,
              public router: Router) { }

  ngOnInit() 
{
    this.myRoom = this.fb.group({
      // 'length': ['', Validators.required],
      // 'depth' : ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      rooms: this.fb.array([])
    })
    console.log(sessionStorage.getItem('projectId'))
  if(sessionStorage.getItem('projectId')!='' && sessionStorage.getItem('PreviousButtonClick')=='0')
  {
      this.myAccountService.getFlooringDetails().subscribe(res=>{
      console.log(res)
      // console.log(res.data.room_details)
      let porojectRoomData= res.data.room_details
      console.log(porojectRoomData[0])
      let i=0;
        // this.projectRoomDataArr= JSON.parse(porojectRoomData)
        // console.log(this.projectRoomDataArr)
      porojectRoomData.forEach((key : any, val: any) => 
      {
        console.log(porojectRoomData)
        this.addRoom(porojectRoomData[i])
        this.select(this.inc)
        this.inc++
        this.selectedIndexP=this.inc;
          i++
      })
    })
  }

  if(sessionStorage.getItem('projectId')=='' || (sessionStorage.getItem('projectId')!='' && sessionStorage.getItem('PreviousButtonClick')=='1'))
  {
    //console.log(this.myRoom)
    // console.log(this.myRoom.value.rooms[0])
    let roomData=sessionStorage.getItem('roomDetails');
    
    console.log('RoomData:  '+roomData)
    // console.log(this.roomDataArr[0].room)
    if(roomData=='')
    {

      this.addRoom(0)

      this.select(0)
      this.selectedIndexP=1;
      // console.log('Debo')
    }  
    else
    {
      this.roomDataArr=JSON.parse(roomData);
      this.roomDataArr.forEach((key : any, val: any) => {
      //key['index'] = val + 1;
      // console.log("P"+key)
      this.addRoom(this.roomDataArr[this.inc])
      this.select(this.inc)
      this.inc++
      this.selectedIndexP=this.inc;
      })
    }
  }
}  
   // console.log('RoomData:'+sessionStorage.getItem('roomDetails'))
    
    
    //console.log(roomDataArr[0].room);}

  RoomFormSubmit()
  {
    console.log(this.myRoom)
    if (this.myRoom.status==='VALID')
    {
      this.show=false;
      console.log(sessionStorage.getItem('roomDetails'))
      this.router.navigate(['/budgetcalculation'])
      // routerLink="/budgetcalculation"

      let i: number;
      for(i=0; i<this.myRoom.value.rooms.length; i++)
      {
      this.roomArr.push(this.myRoom.value.rooms[i])
      // console.log(this.roomArr)
      }
      sessionStorage.setItem('roomDetails', JSON.stringify(this.roomArr))
      console.log(sessionStorage.getItem('roomDetails'))
      // console.log(this.show+ 'yes')
    }
    else
    {
      this.show=true;
      //  sessionStorage.setItem('roomDetails', '');
      // console.log(sessionStorage.getItem('roomDetails'))
      this.router.navigate(['/yourroom'])
      // routerLink="/yourroom"
      // console.log(this.show+ 'no')
    }
    // console.log(this.myRoom)
    // console.log(this.myRoom.value.rooms.length)
    // console.log(this.myRoom.value.rooms[0])
   
    // console.log(this.roomArr)
    // this.length=this.myRoom.value.rooms[0].length
}

  get roomForms() 
  {
    return this.myRoom.get('rooms') as FormArray
  }

  addRoom(roomData:any){
    // console.log(roomData.room)
    if(roomData.room==undefined)
    {
      const room = this.fb.group({ 
        room: ['', [Validators.required]],
        length: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
        depth: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
        demo: [''],
        baseboards: [''],
        doorways: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]]
      }) 
      this.roomForms.push(room)
     this.select(sessionStorage.getItem('currentIndex'))
    }
 else
 {
    const room = this.fb.group({ 
      room: [roomData.room, [Validators.required]],
      length: [roomData.length, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      depth: [roomData.depth, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      demo: [roomData.demo],
      baseboards: [roomData.baseboards],
      doorways: [roomData.doorways, [Validators.required,  Validators.pattern("^[0-9]*$")]]
    })
    this.roomForms.push(room)
    this.select(sessionStorage.getItem('currentIndex'))
  }

    
    //this.selectedIndexP=1;}
}


  //delete room
  deleteRoom(i)
  {
    
    let y:any = sessionStorage.getItem('currentIndex')
    // console.log(y-1);
    this.roomForms.removeAt(i)
    this.select(y-2)
  }


  //button delete icon
  deleteButton(i)
  {
    if(i==0){
      return true;
    }
    // if (this.roomForms.length == 1){
    //   return true;
    // }
  }
  getIndex(index){
     sessionStorage.setItem('currentIndex',index);
  
  }

  
}
