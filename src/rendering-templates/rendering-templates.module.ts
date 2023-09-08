import { Module } from '@nestjs/common';
import { RenderingTemplatesService } from './rendering-templates.service';
import { RenderingTemplatesController } from './rendering-templates.controller';
import { ValidateTemplateService } from './validate-template.service';
import { SchemaService } from '../schema/schema.service';
import { HttpModule } from '@nestjs/axios';
import { UtilsService } from '../utils/utils.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [HttpModule],
  providers: [
    RenderingTemplatesService,
    PrismaClient,
    ValidateTemplateService,
    SchemaService,
    UtilsService,
  ],
  controllers: [RenderingTemplatesController],
})
export class RenderingTemplatesModule {}
