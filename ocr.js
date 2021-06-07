export class Image{

    constructor(w,h,data){
        this.pixels = data.slice()
        this.width = w;
        this.height = h
    }
}