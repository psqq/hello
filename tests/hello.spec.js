import { expect } from 'chai';
import hello from '../';

describe('hello', () => {
    it('should return undefined', () => {
        expect(hello()).eq(undefined);
    });
});
