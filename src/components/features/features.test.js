import React from 'react';
import { render } from '@testing-library/react';
import StoredFeatures from './../../shared/StoredFeatures';
import Features from './features';

//jest.mock('./../../shared/StoredFeatures'); // not sure we need this at all!

afterEach(() => {
    jest.clearAllMocks();
});

describe('features test suite', () => {

    it('will try and mock the stored features', async () => {
        const getFeatureMock = jest.fn().mockReturnValue('this is the mocked value');
        const getFlagsUtilsMock = jest.fn().mockReturnValue({
            getSiteMaintenanceFlags: jest.fn().mockReturnValue({ mockedValueOne: true, mockedValueTwo: true })
        });

        StoredFeatures.getFeature = getFeatureMock;
        StoredFeatures.getFlagsUtils = getFlagsUtilsMock;

        const result =  render(<Features />);
        expect(result.container.innerHTML).toContain('mocked value');
        expect(result.container.innerHTML).toContain('mockedValueOne');
        expect(result.container.innerHTML).toContain('mockedValueTwo');
    });
});