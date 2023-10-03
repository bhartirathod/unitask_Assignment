import { Test, TestingModule } from '@nestjs/testing';
import { ViewprofileController } from './viewprofile.controller';
import { ViewprofileService } from './viewprofile.service';

describe('ViewprofileController', () => {
  let controller: ViewprofileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewprofileController],
      providers: [ViewprofileService],
    }).compile();

    controller = module.get<ViewprofileController>(ViewprofileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
