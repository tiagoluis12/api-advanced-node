import { type LoadFacebookUserApi } from '@/data/contracts/apis'
import { type LoadUserAccountRepository, type CreateFacebookAccountRepository } from '@/data/contracts/repos'
import { FacebookAuthenticationService } from '@/data/services'
import { AuthenticationError } from '@/domain/errors'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('FacebookAuthenticationService', () => {
  let facebookApi: MockProxy<LoadFacebookUserApi>
  let userAccountRepo: MockProxy<LoadUserAccountRepository & CreateFacebookAccountRepository>
  let sut: FacebookAuthenticationService
  const token = 'any_token'

  beforeEach(() => {
    facebookApi = mock()
    facebookApi.loadUser.mockResolvedValue({
      name: 'any_name',
      email: 'any_email',
      facebookId: 'any_facebook_id'
    })
    userAccountRepo = mock()
    sut = new FacebookAuthenticationService(
      facebookApi,
      userAccountRepo
    )
  })

  it('should call LoadFacebookUserApi with correct params', async () => {
    await sut.perform({ token })

    expect(facebookApi.loadUser).toHaveBeenCalledWith({ token })
    expect(facebookApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('should return AuthenticationError when LoadFacebookUserApi returns undefined', async () => {
    facebookApi.loadUser.mockResolvedValueOnce(undefined)

    const authResult = await sut.perform({ token })

    expect(authResult).toEqual(new AuthenticationError())
  })

  it('should calls LoadUserAccountRepo when LoadFacebookUserApi returns data', async () => {
    await sut.perform({ token })

    expect(userAccountRepo.load).toHaveBeenCalledWith({ email: 'any_email' })
    expect(userAccountRepo.load).toHaveBeenCalledTimes(1)
  })

  it('should calls CreateUserAccountRepo when LoadFacebookUserApi returns undefined', async () => {
    userAccountRepo.load.mockResolvedValueOnce(undefined)

    await sut.perform({ token })

    expect(userAccountRepo.createFromFacebook).toHaveBeenCalledWith({
      email: 'any_email',
      name: 'any_name',
      facebookId: 'any_facebook_id'
    })
    expect(userAccountRepo.createFromFacebook).toHaveBeenCalledTimes(1)
  })
})
