import { PartialType } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { CreateArticleDto } from './create-article.dto'

export class UpdateArticleDto
  extends PartialType(CreateArticleDto)
  implements Prisma.ArticleUpdateInput {}
