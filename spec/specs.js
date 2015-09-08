describe("factorial", function() {
  it('prints out all numbers', function() {
    expect(factorial(15)).to.eql([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  });

  it('multiplies all the numbers in the array together', function() {
    expect(factorial(4)).to.eql(24)
  });
});
