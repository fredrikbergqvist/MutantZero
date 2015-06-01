import { Dice6, Dice66 }  from '/UtilityTools/Dice';

var MutantGeneratorData = {
    stats: {
        sty:{
            name: "Styrka",
            abbr: "STY"
        },
        kyl: {
            name: "Kyl",
            abbr: "KYL"
        }
    },
    size: {
        dice: rollD66(),
        result:[
        {
            from: 11,
            to: 14,
            resultText: "Ynklig",
            stat: {
                type: this.stat.sty,
                value: 1
            }
        },
        {
            from: 15,
            to: 21,
            resultText: "Nätt",
            stat: {
                type: this.stat.sty,
                value: 2
            }
        },
        {
            from: 22,
            to: 33,
            resultText: "Medelstor",
            stat: {
                type: this.stat.sty,
                value: 3
            }
        },
        {
            from: 34,
            to: 44,
            resultText: "Kraftig",
            stat: {
                type: this.stat.sty,
                value: 4
            }
        },
        {
            from: 43,
            to: 55,
            resultText: "Storväxt",
            stat: {
                type: this.stat.sty,
                value: 8
            }
        },
        {
            from: 56,
            to: 62,
            resultText: "Jättelik",
            stat: {
                type: this.stat.sty,
                value: 10
            }
        },
        {
            from: 63,
            to: 66,
            resultText: "Gigantisk",
            stat: {
                type: this.stat.sty,
                value: 12
            }
        }
    ]
    },
    type:[
        {
            from: 11,
            to: 18,
            resultText: "Sinneslö växtätare",
            stat:{
                type: this.stat.kyl,
                value: 0
            }
        },
        {
            from: 19,
            to: 28,
            resultText: "Växtätare",
            stat:{
                type: this.stat.kyl,
                value: 1
            }
        },
        {
            from: 29,
            to: 36,
            resultText: "Samlare",
            stat:{
                type: this.stat.kyl,
                value: 2
            }
        },
        {
            from: 37,
            to: 44,
            resultText: "Asätare",
            stat:{
                type: this.stat.kyl,
                value: 4
            }
        },
        {
            from: 45,
            to: 62,
            resultText: "Rovdjur",
            stat:{
                type: this.stat.kyl,
                value: 6
            }
        },
        {
            from: 63,
            to: 66,
            resultText: "Aggressivt rovdjur",
            stat:{
                type: this.stat.kyl,
                value: 8
            }
        },
    ],
    shape:[
        {
            from: 11,
            to: 12,
            resultText: "Växtlik",
            limbs: false
        },
        {
            from: 13,
            to: 14,
            resultText: "Amöboid",
            limbs: false
        },
        {
            from: 15,
            to: 22,
            resultText: "Amfibisk",
            limbs: true
        },
        {
            from: 23,
            to: 29,
            resultText: "Reptilisk",
            limbs: true
        },
        {
            from: 30,
            to: 39,
            resultText: "Insektoid",
            limbs: true
        },
        {
            from: 40,
            to: 47,
            resultText: "Gnagarlik",
            limbs: true
        },
        {
            from: 48,
            to: 55,
            resultText: "Fågellik",
            limbs: true
        },
        {
            from: 56,
            to: 66,
            resultText: "Aplik",
            limbs: true
        },
    ],
    limbs:{
        dice: rollD6(2),
        result:[
            {
                from: 2,
                to: 3,
                resultText: "Inga"
            },
            {
                from: 4,
                to: 5,
                resultText: "Två ben"
            },
            {
                from: 6,
                to: 7,
                resultText: "Fyra ben"
            },
            {
                from: 8,
                to: 9,
                resultText: "Vingar"
            },
            {
                from: 10,
                to: 10,
                resultText: "Sex ben"
            },
            {
                from: 11,
                to: 11,
                resultText: "Två ben, två armar"
            },
            {
                from: 12,
                to: 12,
                resultText: "Många!"
            },
        ]
    }
}
/*

* */