export const required = (value)=>{
    if(value && value.length){
        return undefined
    }else{
        return <span>Field required</span>
    }
}


export const maxLengthThunk = (maxLength)=> (value)=> {
    if (value) {
        if (value.length < maxLength) {
            return undefined
        } else {
            return <span>Max length is {maxLength} </span>

        }
    }

}