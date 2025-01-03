import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NextFunction, Request, Response } from 'express'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  })

  // // Enable URI versioning
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // })

  // Enable global logging
  app.use((req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()

    res.on('finish', () => {
      const duration = Date.now() - startTime
      logger.log(
        `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
      )
    })

    next()
  })

  const config = new DocumentBuilder()
    .setTitle('Connector API')
    .setVersion('0.0.1')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  const port = process.env.PORT ?? 8000
  await app.listen(port)
}
bootstrap()
