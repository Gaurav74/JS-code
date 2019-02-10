class Project {

    constructor(topic, money) {
        this.name = topic;
        this.money = money;
    }
     info() {
        console.log(`info is name: ${this.name} and money spent ${this.money} :${this.point} `);
    }

}

let extension=new Project("chrome",2000);
Object.assign(extension,{point :1});
extension.info();