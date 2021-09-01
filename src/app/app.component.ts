import { Component } from "@angular/core";

class JustData {}

class CopyData {}

class NameData extends JustData {
  name: string;
  id: string;
}

class MetaData extends JustData {
  id: string;
  name: string;
  setName(name: string) {
    this.name = name;
  }
  setId(id: string) {
    this.id = id;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  readonly selectedData: Array<MetaData> = [];
  ngOnInit() {
    let sampleMetaData1 = new JustData() as MetaData;
    sampleMetaData1.id = "1";
    sampleMetaData1.name = "Emily";
    this.selectedData.push(sampleMetaData1);
    let sampleMetaData2 = new JustData() as MetaData;
    sampleMetaData2.id = "2";
    sampleMetaData2.name = "Bmily";
    this.selectedData.push(sampleMetaData2);
  }
  showData() {
    let x = this.copy(this.selectedData);
    this.runEffectiveNess(this.selectedData);
  }
  private runEffectiveNess(localEffectiveData: Array<NameData>) {
    localEffectiveData.forEach((el) => {
      delete el.name;
    });
  }
  copy(localEffectiveData: Array<any>): Array<NameData> {
    let retVal: Array<NameData> = [];
    let nameData = new NameData();

    localEffectiveData.forEach((el) => {
      console.log(Object.keys(el));
    });
    return retVal;
  }
}
