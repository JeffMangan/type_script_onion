import { User } from '../core/domain/User';
import { UserApplicationService } from '../application/UserApplicationService';
import { UserService } from '../core/services/UserService';
import { mock } from 'jest-mock-extended';

// Create a mock UserService
const userServiceMock = mock<UserService>();

// Create a UserApplicationService instance with the mocked UserService
const userApplicationService = new UserApplicationService(userServiceMock);

describe('UserApplicationService', () => {
  const testUser = new User(1, 'John', 'Doe', 'john.doe@example.com');

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should create a user', async () => {
    userServiceMock.createUser.mockResolvedValueOnce(testUser);

    const result = await userApplicationService.createUser(
      testUser.firstName,
      testUser.lastName,
      testUser.email
    );

    expect(result).toEqual(testUser);
    expect(userServiceMock.createUser).toHaveBeenCalledWith(
      testUser.firstName,
      testUser.lastName,
      testUser.email
    );
  });

  // Write similar tests for getUserById, updateUser, and deleteUser
});
