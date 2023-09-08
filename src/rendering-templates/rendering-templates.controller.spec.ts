import { Test, TestingModule } from '@nestjs/testing';
import { RenderingTemplatesController } from './rendering-templates.controller';
import { RenderingTemplatesService } from './rendering-templates.service';
import { HttpModule } from '@nestjs/axios';
import { ValidateTemplateService } from './validate-template.service';
import { SchemaService } from '../schema/schema.service';
import { UtilsService } from '../utils/utils.service';
import { PrismaClient } from '@prisma/client';

describe('RenderingTemplatesController', () => {
  let controller: RenderingTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RenderingTemplatesController],
      imports: [HttpModule],
      providers: [
        RenderingTemplatesService,
        PrismaClient,
        ValidateTemplateService,
        SchemaService,
        UtilsService,
      ],
    }).compile();

    controller = module.get<RenderingTemplatesController>(
      RenderingTemplatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
