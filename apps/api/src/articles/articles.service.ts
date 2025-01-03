import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto })
  }

  findAll() {
    return this.prisma.article.findMany({
      orderBy: { updatedAt: 'desc' },
    })
  }

  findOne(id: string) {
    return this.prisma.article.findUniqueOrThrow({ where: { id } })
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    })
  }

  remove(id: string) {
    return this.prisma.article.delete({ where: { id } })
  }
}
