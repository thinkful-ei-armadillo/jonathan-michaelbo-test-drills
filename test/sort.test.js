'use strict';

const sort = require('../sort');
const expect = require('chai').expect;

describe('sort function', () => {

  it('should sort an array', () => {
    const correctArr = [1,2,3,4,5];
    const arr = [3,1,5,4,2];

    const actualArr = sort(arr);

    expect(correctArr).to.deep.equal(actualArr);

  });
});