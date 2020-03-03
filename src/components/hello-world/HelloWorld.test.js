import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';
//import SharedFactory from './../../shared/SharedFactory';

describe('hello world component tests', () => {

    //jest.mock('./../../shared/SharedFactory');

    beforeEach(() => {
        //SharedFactory.mockClear();
    });

    it('should mock the launch darkly flags utils function constructor', () => {
        


        const rendered = render(<HelloWorld />);
    });
});