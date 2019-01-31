class ArraySet{
    constructor(data){
        this.sum=0;
        this.data=data;
        this.sumObjects(data);
        console.log(this.sum);
    }
    mapTest(){
        this.data.map(x=>x*2);
    }
 
    displayArray(){
        this.data.forEach((ele,index)=>{
            //console.log(`${ele}---${index}`);
        });
    }
   
    sumObjects(data){
        data.forEach(ele=>{
            if(Array.isArray(ele))
                this.sumObjects(ele);
        if(!isNaN(ele))
            this.sum+=ele;
        });
    }
}

export default ArraySet;