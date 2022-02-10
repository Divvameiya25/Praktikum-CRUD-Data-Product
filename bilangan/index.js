//soal no 3
app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)

    let response = {
        decimal : decimal,
        result : {
            biner : biner,
            octal : octal,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner)

    let decimal = parseInt(biner,2)
    let octal = parseInt(biner, 2).toString(8)
    let hex = parseInt(biner, 2).toString(16)

    let response = {
        biner : biner,
        result : {
            decimal : decimal,
            octal : octal,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal)

    let decimal = parseInt(octal,8)
    let biner = parseInt(octal, 8).toString(2)
    let hex = parseInt(octal, 8).toString(16)

    let response = {
        octal : octal,
        result : {
            decimal : decimal,
            biner : biner,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/hex", (req,res) => {

    let hex = Number(req.body.hex)

    let decimal = parseInt(hex,16)
    let biner = parseInt(hex, 16).toString(2)
    let octal = parseInt(hex, 16).toString(8)

    let response = {
        Hexadecimal : hex,
        result : {
            decimal : decimal,
            octal : octal,
            biner : biner
        }
    }
    res.json(response)
})
