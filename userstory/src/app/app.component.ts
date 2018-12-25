import { Component } from '@angular/core';
import { SingleDigitService } from './single-digit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private dg: SingleDigitService){}

  onFileChange(event) {
    var reader = new FileReader();
    let count = 0;
    let output = '';
    reader.onload = () => {
      let str = reader.result.toString();
      let str1:string = '';
      let str2:string = '';
      let str3:string = '';
      for(let i =0 ;i< str.length; i++) {
        if(str.charAt(i) == '\n')
            count++;            
        switch(count) {
          case 0:
            if(str.charAt(i) != '\n')
              str1 += str.charAt(i);
          break;
          case 1:
            if(str.charAt(i) != '\n')
            str2 += str.charAt(i);
          break;
          case 2:
            if(str.charAt(i) != '\n')
            str3 += str.charAt(i);
          break;
          case 3:
            // console.log({number:this.getNumber(str1, str2, str3)});
            output += this.getNumber(str1, str2, str3) + '\n';
          break;
          case 4:
            str1 = str2 = str3 = '';
            count = 0;
          break;
        }
      }
      this.generateOutputFile(output);
    }
    reader.onerror = function(stuff) {
      console.log("error", stuff)
    }
    reader.readAsText(event.target.files[0])
  }

  generateOutputFile(output) {
    let outPutFile = new File([output], 'outputfile.txt');
    var a = document.createElement("a"),
              url = URL.createObjectURL(outPutFile);
      a.href = url;
      a.download = 'outputfile.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  }

  getNumber(str1:string, str2:string, str3:string) {
    let number = '';
    for(let i=0; i<str1.length; i+=3) {
      let temp = '';
      temp += str1.substr(i, 3);
      temp += str2.substr(i, 3);
      temp += str3.substr(i, 3);
      number += this.dg.getDigit(temp);
      temp = '';
    }
    return number;
  }
}
