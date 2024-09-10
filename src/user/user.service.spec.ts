import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { ApiUserPostRequestBodyDto } from './dto/api-user-post-request-body.dto';
import { NotFoundException } from '@nestjs/common';
import { ERROR } from '../constant/error'

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
      {
        provide: UserRepository,
        useValue: {
          createUser: jest.fn(),
          addPost: jest.fn(),
          deleteUser: jest.fn()
        }
      }
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository)
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('createUser',()=>{
    it('should create a user successfully', async() => {
      //GIVEN
      const dto: ApiUserPostRequestBodyDto = { name: 'test user'};
      const expectedUser = {id:1, name:'test user', posts:[]}
      jest.spyOn(userRepository, 'createUser').mockResolvedValue(expectedUser)

      //WHEN
      const result = await userService.createUser(dto)

      //THEN
      expect(result).toEqual(expectedUser);
      expect(userRepository.createUser).toHaveBeenCalledWith(dto)
    })
  })

  describe('addPost', ()=>{
    it('should add a post to a user successfully', async() => {
    //GIVEN
    const userId = 1
    const title = 'Test Post'
    const content = 'Test Content'
    const expectedPost = {postId:1, title, content};
    jest.spyOn(userRepository, 'addPost').mockResolvedValue(expectedPost);

      //WHEN
      const result = await userService.addPost(userId, title, content);

      //THEN
      expect(result).toEqual(expectedPost);
      expect(userRepository.addPost).toHaveBeenCalledWith(userId, title, content)
    })
  })

  describe('deleteUser', () =>{
    it('유저 삭제가 제대로 성공했는지', async()=>{
      //GIVEN
      const userId = 1;
      jest.spyOn(userRepository, 'deleteUser').mockResolvedValue(undefined)

      //WHEN
      await userService.deleteUser(userId)

      //THEN
      expect(userRepository.deleteUser).toHaveBeenCalledWith(userId);
    }) 

    it('유저를 못찾아서 에러 뜰때', async() => {
      //GIVEN
      const userId = 999;
      jest.spyOn(userRepository, 'deleteUser').mockRejectedValue(new NotFoundException(ERROR.USER_NOT_FOUND))

      //WHEN & THEN
      await expect(userService.deleteUser(userId)).rejects.toThrow(NotFoundException)
    })
  })
})
