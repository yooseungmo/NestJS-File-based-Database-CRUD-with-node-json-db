import { FileManager } from "../utils/file-manager";
import { UserRepository } from "./user.repository";
import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException } from "@nestjs/common";


describe('UserRepository', () => {
  let userRepository: UserRepository;
  let fileManager: FileManager

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({  
      providers: [
        UserRepository,
        {
          provide: FileManager,
          useValue:  { readData: jest.fn(), writeData: jest.fn()}
        }
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository)
    fileManager = module.get<FileManager>(FileManager);
  });

  it('should be defined', () =>{
    expect(userRepository).toBeDefined();
  })

  describe('getAllUsers',() =>{
    it('유저 배열로 리턴 해야함', async() => {
      //GIVEN
      const users = [{ id: 1, name: 'Test User', posts: []}]
      jest.spyOn(fileManager, 'readData').mockResolvedValue(users);

      //WHEN
      const result = await userRepository.getAllUsers();

      //THEN
      expect(result).toStrictEqual(users);
      expect(fileManager.readData).toHaveBeenCalledWith('/users')
    })

    it('유저가 없으면 빈 배열 나와랏', async()=>{
      //GIVEN
      jest.spyOn(fileManager, 'readData').mockResolvedValue(null);

      //WHEN
      const result = await userRepository.getAllUsers()

      //THEN
      expect(result).toEqual([]);
      expect(fileManager.readData).toHaveBeenCalledWith('/users')
    })
  })

  describe('createUser', () =>{
    it('should create a new user', async () => {
      //GIVEN
      const dto = { name: 'New User'};
      const user = [];
      jest.spyOn(fileManager, 'readData').mockResolvedValue(user)
      jest.spyOn(fileManager, 'writeData').mockResolvedValue(undefined)

      //WHEN
      const result = await userRepository.createUser(dto);

      //THEN
      expect(result).toStrictEqual({id:1, name:'New User',posts: []})
      expect(fileManager.writeData).toHaveBeenCalledWith('/users',[{ id:1, name: 'New User', posts:[]}])
    })
  })

  describe('addPost', () => {
    it('유저로부터 글이 작성되어야한다', async () => {
      //GIVEN
      const user = [{ id:1, name: 'Test User', post:[]}];
      jest.spyOn(fileManager, 'readData').mockResolvedValue(user)
      jest.spyOn(fileManager, 'writeData').mockResolvedValue(undefined)

      //WHEN
      const result = await userRepository.addPost(1, 'Test Title',  'Test Content');

      //THEN
      expect(result).toStrictEqual({ postId: 1, title: 'Test Title', content: 'Test Content'})
      expect(fileManager.writeData).toHaveBeenCalled();
    })

    it('유저 못찾을때 에러', async ()=>{
      //Given
      const users = [];
      jest.spyOn(fileManager, 'readData').mockResolvedValue(users)

      //WHEN & THEN
      await expect(userRepository.addPost(1, 'Test Title', 'Test Content')).rejects.toThrow(NotFoundException)
    })
  })
});