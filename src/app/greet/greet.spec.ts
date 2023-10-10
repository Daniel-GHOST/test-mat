import { greet } from "./greet";

describe ('greet test suit', ()=>{
    it('Should include the name in the message', ()=>{
        expect(greet('David')).toContain('David');
    })
})