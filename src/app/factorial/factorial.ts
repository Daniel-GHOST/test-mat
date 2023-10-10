export function factorial(x:number){
    if(x<0||x>15||x==0){
        if(x==0){
            return 1;
        }else{
            return 0;
        }
    }else{
        var result=1;
        for(var i=1; i<=x; i++){
            result*=i;
        }
        return result;
    }
}