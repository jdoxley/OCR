class Image{

    constructor(w,h,data){
        this.pixels = data.slice()
        this.width = w;
        this.height = h
    }
}

function ocr(image) {
    
}

describe("Image OCR", () => {
    it('Detects 8', () => {
        let image = new Image(13,18, [0xff, 0xff, 0xff, 0xc0, 0xad, 0xad, 0xad, 0xad, 0xaf, 0xe8, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xda,  0x2,  0x0,  0x0,  0x0,  0x0,  0x0, 0x3c, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0x28, 0x2e,  0xe,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0xdc, 0xff, 0x50,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0xdc, 0xff, 0x50,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0xdc, 0xff, 0x50,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0xdc, 0xff, 0x50,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xd4,  0x0,  0x0, 0xdc, 0xff, 0x50,  0x0, 0x37, 0xff, 0xff, 0xff,
            0xff, 0xd3, 0x42,  0x0,  0x0, 0x3a, 0x44, 0x12,  0x0,  0xe, 0x81, 0xf3, 0xff,
            0xd9,  0xb,  0x0,  0x0,  0x0,  0x0,  0x0,  0x0,  0x0,  0x0,  0x0, 0x4f, 0xff,
            0xb0,  0x0,  0xb, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x35,  0x0,  0xa, 0xf1,
            0xad,  0x0, 0x2b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc8,  0x0,  0x0, 0xe8,
            0xad,  0x0, 0x2b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc8,  0x0,  0x0, 0xe8,
            0xad,  0x0, 0x2b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc8,  0x0,  0x0, 0xe8,
            0xad,  0x0, 0x2b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc8,  0x0,  0x0, 0xe8,
            0xad,  0x0, 0x2b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc8,  0x0,  0x0, 0xe8,
            0xb2,  0x0,  0x8, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x28,  0x0,  0xe, 0xf5,
            0xe8, 0x1e, 0x15, 0x15, 0x15, 0x15, 0x15, 0x15, 0x15, 0x15, 0x15, 0x6b, 0xff ])

        expect(ocr(image)).toBe(8)
    })
})