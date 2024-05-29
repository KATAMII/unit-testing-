import { humanity, sciences,languages,calculateGradesAndAverage } from "./main";
describe("sciences",()=>{
    test('sciences should return A for marks above 70',()=>{
        expect(sciences(80)).toBe('A');
        expect(sciences(90)).toBe('A');   
    })
    test('sciences should return B for marks below 70 but above or equal to 60',()=>{
        expect(sciences(65)).toBe('B');
        expect(sciences(60)).toBe('B');   
    })
    test('sciences should return C for marks below 60 but above or equal to 50',()=>{
        expect(sciences(55)).toBe('C');
        expect(sciences(50)).toBe('C');   
    })
    test('sciences should return PASS for marks below 50 but above or equal to 40',()=>{
        expect(sciences(49)).toBe('pass');
        expect(sciences(40)).toBe('pass');   
    })
    test('sciences should return SUP for marks below 40',()=>{
        expect(sciences(39)).toBe('sup');
        expect(sciences(24)).toBe('sup');   
    })
})
describe("humanities",()=>{
    test('humanities should return A for marks above 80',()=>{
        expect(humanity(80)).toBe('A');
        expect(humanity(90)).toBe('A');   
    })
    test('humanities should return B for marks below 80 but above or equal to 70',()=>{
        expect(humanity(75)).toBe('B');
        expect(humanity(70)).toBe('B');   
    })
    test('humanities should return C for marks below 70 but above or equal to 60',()=>{
        expect(humanity(69)).toBe('C');
        expect(humanity(64)).toBe('C');   
    })
    test('humanities should return PASS for marks below 60 but above or equal to 50',()=>{
        expect(humanity(52)).toBe('pass');
        expect(humanity(55)).toBe('pass');   
    })
    test('humanities should return SUP for marks below 50',()=>{
        expect(humanity(40)).toBe('sup');
        expect(humanity(0)).toBe('sup');   
    })
})
describe("languages",()=>{
    test('languages should return A for marks above 75',()=>{
        expect(languages(75)).toBe('A');
        expect(languages(90)).toBe('A');   
    })
    test('languages should return B for marks below 75 but above or equal to 65',()=>{
        expect(languages(74)).toBe('B');
        expect(languages(70)).toBe('B');   
    })
    test('languages should return C for marks below 65 but above or equal to 55',()=>{
        expect(languages(60)).toBe('C');
        expect(languages(55)).toBe('C');   
    })
    test('languages should return PASS for marks below 55 but above or equal to 45',()=>{
        expect(languages(54)).toBe('pass');
        expect(languages(45)).toBe('pass');   
    })
    test('languages should return SUP for marks below 45',()=>{
        expect(languages(40)).toBe('sup');
        expect(languages(0)).toBe('sup');   
    })
})
describe("calculateGradesAndAverage",()=>{
    test('should return grades and average',()=>{
        const studentScore = {name: "john Doe", math: 80, eng: 65, kisw: 48, phyc: 67, chem: 56, cre:89, comp: 82};
        expect(calculateGradesAndAverage(studentScore)).toEqual({name: 'john Doe', math:'A',eng:'B',kisw:'pass',phyc:'B',chem:'C',cre:'A',comp:'A',average:69 })

    })
    test('should return grades and average',()=>{
        const studentScore = {name: "Lydia", math: 90, eng: 20, kisw: 75, phyc: 60, chem: 45, cre:90, comp: 90};
        expect(calculateGradesAndAverage(studentScore)).toEqual({name: 'Lydia', math:'A',eng:'sup',kisw:'A',phyc:'B',chem:'pass',cre:'A',comp:'A',average:67 })

    })
   
})

