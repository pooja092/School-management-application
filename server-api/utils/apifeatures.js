class ApiFeatures{
    constructor(query,queryStr){
         this.query= query;
         this.queryStr= queryStr 
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            FirstName:{
                $regex:this.queryStr.keyword,
                $options:"i"
            },
            Sr:{
                $regex:this.queryStr.keyword,
                // $options:"i"
            },
        }:{};

        this.query= this.query.find({...keyword});
        return this;
    }
    
    filter(){
        const queryCopy= {...this.queryStr}
        // console.log(queryCopy);
        // removing some field from category 
        const removeFields= ["keyword","page","limit "];

        removeFields.forEach(key=>delete queryCopy[key]);

        // console.log(queryCopy);
        this.query= this.query.find(queryCopy);
        return this;
    }
}

module.exports= ApiFeatures;