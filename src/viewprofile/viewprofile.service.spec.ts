import { Test, TestingModule } from '@nestjs/testing';
import { ViewprofileService } from './viewprofile.service';

describe('ViewprofileService', () => {
  let service: ViewprofileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewprofileService],
    }).compile();

    service = module.get<ViewprofileService>(ViewprofileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
