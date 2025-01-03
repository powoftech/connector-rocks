import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ArticlesService } from './articles.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    try {
      return await this.articlesService.create(createArticleDto)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.articlesService.findAll()
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.articlesService.findOne(id)
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Cannot GET /articles/${id}`)
      }

      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    try {
      return this.articlesService.update(id, updateArticleDto)
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Cannot PATCH /articles/${id}`)
      }

      console.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.articlesService.remove(id)
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Cannot DELETE /articles/${id}`)
      }

      console.error(error)
      throw new InternalServerErrorException()
    }
  }
}
