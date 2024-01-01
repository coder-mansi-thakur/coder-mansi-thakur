import { validate } from "./formUtils";

describe('validate', () => {

    // Tests that the function returns an empty object when no errors are found
    it('should return an empty object when no errors are found', () => {
      const form = [
        { fieldName: 'name', required: true },
        { fieldName: 'email', required: true },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({});
    });

    // Tests that the function returns an object with errors for invalid required fields
    it('should return an object with errors for invalid required fields', () => {
      const form = [
        { fieldName: 'name', required: true },
        { fieldName: 'email', required: true },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: '',
        email: '',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({
        name: 'required',
        email: 'required',
      });
    });

    // Tests that the function returns an object with errors for invalid regex fields
    it('should return an object with errors for invalid regex fields', () => {
      const form = [
        { fieldName: 'name', required: true, regex: /^[A-Za-z]+$/, regexMessage: 'Invalid name' },
        { fieldName: 'email', required: true, regex: /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/, regexMessage: 'Invalid email' },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: 'John123',
        email: 'john.doe@example',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({
        name: 'Invalid name',
        email: 'Invalid email',
      });
    });

    // Tests that the function returns an object with errors for fields with maxCharacter limit exceeded
    it('should return an object with errors for fields with maxCharacter limit exceeded', () => {
      const form = [
        { fieldName: 'name', required: true, maxCharacter: 10 },
        { fieldName: 'email', required: true, maxCharacter: 20 },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: 'John Doe John Doe',
        email: 'john.doe@example.com',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({
        name: `name have more than 10`
      });
    });

    // Tests that the function returns an object with errors for fields with minCharacter limit not met
    it('should return an object with errors for fields with minCharacter limit not met', () => {
      const form = [
        { fieldName: 'name', required: true, minCharacter: 5 },
        { fieldName: 'email', required: true, minCharacter: 10 },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: 'John',
        email: 'john.doe@example.com',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({
        name: `name have less than 5`,
      });
    });

    // Tests that the function returns an object with errors for fields with both maxCharacter and minCharacter limits
    it('should return an object with errors for fields with both maxCharacter and minCharacter limits', () => {
      const form = [
        { fieldName: 'name', required: true, minCharacter: 5, maxCharacter: 10 },
        { fieldName: 'email', required: true, minCharacter: 10, maxCharacter: 20 },
        { fieldName: 'age', required: false },
      ];
      const values = {
        name: 'John Doe John Doe',
        email: 'john.doe@example.com',
        age: 25,
      };

      const result = validate(form, values);

      expect(result).toEqual({
        name: 'name have more than 10' 
      });
    });
});
