describe('cipher', () => {

    it('debería ser un objeto', () => {
      assert.equal(typeof cipher, 'object');
    });
  
    describe('cipher.encode', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      });
  
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
          assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
      });
      it('debería retornar 345678 para 012345 con offset 33',()=>{
        assert.equal(cipher.encode('012345',33),'345678');
     });
     it('debería retornar hij para abc con offset 33',()=>{
      assert.equal(cipher.encode('abc',33),'hij');
   });
    });
  
    describe('cipher.decode', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });
  
      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
        assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      });
      it('debería retornar 012345 para 345678 con offset 33',()=>{
        assert.equal(cipher.encode('345678',33),'012345');
     });
     it('debería retornar abc para hij con offset 33',()=>{
      assert.equal(cipher.encode('hij',33),'abc');
   });
    });
  
  });