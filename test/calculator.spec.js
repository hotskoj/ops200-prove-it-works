import { expect } from 'chai';
import Calculator from '../src/lib/Calculator.js';

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should have a subtract function', () => {
    expect(calculator.subtract).to.exist;
  });

  it('should subtract 3 - 2 together correctly', () => {
    expect(calculator.subtract(3, 2)).to.equal(1);
  });

  it('should have a multiply function', () => {
    expect(calculator.multiply).to.exist;
  });

  it('should multiply 3 * 2 together correctly', () => {
    expect(calculator.multiply(3, 2)).to.equal(6);
  });

  it('should have a divide function', () => {
    expect(calculator.divide).to.exist;
  });

  it('should divide 6 / 2 together correctly', () => {
    expect(calculator.divide(6, 2)).to.equal(3);
  });
});