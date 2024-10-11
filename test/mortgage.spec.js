import { expect } from 'chai';
import Mortgage from '../src/lib/Mortgage.js';

describe('Mortgage', () => {
    let mortgage = null;
  
    beforeEach(() => {
      mortgage = new Mortgage(328000, 5.5, 30, 12);
    });

    it('should have a principal property', () => {
        expect(mortgage.principal).to.exist;
    });

    it('should have a interest rate property', () => {
        expect(mortgage.interest).to.exist;
    });

    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });
    
    it('should calculate monthly payment correctly', () => {
        expect(mortgage.monthlyPayment()).to.equal('1862.35');
    });

  });