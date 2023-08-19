import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice-8';
  text : any = [];
  checkBoxVar:any = [];
  check = true;
  editTextIndex : any;
  addForm !: FormGroup;
  editForm !: FormGroup;
  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
          textInp : new FormControl('',Validators.required) 
      }
    )
    this.editForm = new FormGroup(
      {
          editText : new FormControl('',Validators.required) 
      }
    )
  }
  textAdd() {
    if(this.addForm.invalid) {
       alert('Please Enter Some Text')
    } else {
      this.text.push(this.addForm.controls['textInp'].value);
      this.checkBoxVar.push(false);
      this.addForm.reset();
    }
  }
  deleteText(index : any){
    this.text.splice(index,1);
    this.checkBoxVar.splice(index,1);
  }
  textEdit(){ 
    if(this.editForm.invalid) {
      alert('Please Enter Some Text')
   } else {
     this.text[this.editTextIndex] = this.editForm.controls['editText'].value;
     this.editForm.reset();
     this.check = true;
   }
  }
  editText(index : any) {
    this.check = false;
    this.editForm.controls['editText'].setValue(this.text[index]);
    this.editTextIndex = index;
  }
  cancelEdit(){
    this.check = true;
  }
  checkBox(index:any) {
      (this.checkBoxVar[index] == true) ? this.checkBoxVar[index] = false : this.checkBoxVar[index] = true;
      
  }
}
