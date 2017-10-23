var request=require('supertest');
import container from './../src/config/container';
import { app } from './../src/main.server';
import { expect,should } from 'chai';


describe('#Numeros', () => {
  
  it('1+1=2', (cb) => {
    expect(2).to.be.eq(1+1);
    cb()
  });

});


describe('Testeando un endpoint', () => {

  it('COn promise',() => {
    return request(app)
    .get('/data')
    .expect('Content-type',/json/)
    .expect(200)
    .then((data)=>{
      expect("exito").to.be.equals(data.body.data);   
    })
  });


});

describe("testeando servicio",()=>{
  it('getAll Services',async ()=>{
    const users=await container.cradle.postulanteService.getAll();
    console.log(us
      ers);
    expect(users).to.be.equal([]);
  })
})