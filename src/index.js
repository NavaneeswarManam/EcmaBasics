import Home from './Home/home'
import ArraySet from './arrays'; 

 class Onida{
    constructor(){
        let home=new Home("eswar","Manam","Ram","Raj");
        console.log('this is onida');
        this.arrayTest();
    }
    arrayTest(){
        let data=[1,3,
                        [121,123,125,
                            {x:23,y:34},
                        7,3,54]
                  ,7,
                    [true,false],
                   undefined,3];
        var arr=new ArraySet(data);
        arr.displayArray();
    }
}

const getData =()=>{

}

export default new Onida();