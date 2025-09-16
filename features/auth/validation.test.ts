import { isValidEmail, validatePasswordStrength } from './validation';

describe('Auth Validation', () => {
  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('test.name@example.co.uk')).toBe(true);
    });

    it('should return false for invalid emails', () => {
      expect(isValidEmail('test')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });

    it('should trim whitespace', () => {
      expect(isValidEmail('  test@example.com  ')).toBe(true);
    });
  });

  describe('validatePasswordStrength', () => {
    it('should return ok for valid passwords', () => {
      expect(validatePasswordStrength('password123')).toEqual({ ok: true });
      expect(validatePasswordStrength('anotherValidPass1')).toEqual({ ok: true });
    });

    it('should return error for passwords less than 8 characters', () => {
      expect(validatePasswordStrength('pass')).toEqual({
        ok: false,
        reason: 'Password must be at least 8 characters.',
      });
    });

    it('should return error for passwords without numbers', () => {
      expect(validatePasswordStrength('password')).toEqual({
        ok: false,
        reason: 'Use letters and numbers.',
      });
    });

    it('should return error for passwords without letters', () => {
      expect(validatePasswordStrength('12345678')).toEqual({
        ok: false,
        reason: 'Use letters and numbers.',
      });
    });
  });
});
