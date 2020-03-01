import { LaunchDarklyClientProxy } from '../../shared/LaunchDarklyClientProxy';

describe('Launch Darkly Client Proxy tests', () => {

    let ldcProxy;
    let mockLdClient;
    let mockUserInfoFactory;

    const userInfo = { id: 1, firstName: 'Andy', lastName: 'Hudson' };

    beforeEach(() => {
        mockLdClient = jest.fn();
        mockLdClient.identify = jest.fn().mockImplementation(() => Promise.resolve({someFlag: true}));
        mockLdClient.getUser = jest.fn().mockImplementation(() => Promise.resolve({ id: 1, firstName: 'Andy', lastName: 'Hudson'}));


        mockUserInfoFactory = jest.fn();
        mockUserInfoFactory.createUserInfo = jest.fn().mockReturnValue({});

        ldcProxy = new LaunchDarklyClientProxy(mockLdClient, mockUserInfoFactory, userInfo);
    });

    afterEach(() => {
        ldcProxy = null;
        mockLdClient = null;
        mockUserInfoFactory = null;
    });

    it('launch darkly client proxy can be initialised and is not null', () => {
        expect(ldcProxy).not.toBeNull();
    });

    it('returns user information when addUserToDashboard is called', () => {
        return ldcProxy.addUserToDashboard().then(user => {
            expect(user.id).toBe(1);
            expect(user.firstName).toBe('Andy');
            expect(user.lastName).toBe('Hudson');
        });

    });

});