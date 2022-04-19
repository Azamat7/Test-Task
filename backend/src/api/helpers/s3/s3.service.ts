import { Inject, Injectable, Req, Res } from '@nestjs/common';
import * as AWS from "aws-sdk";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class S3Service {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  async uploadFile(file){
    const AWS_S3_BUCKET = this.config.get<string>('AWS_S3_BUCKET');;
    const { originalname } = file;

    return await this.s3_upload(file.buffer, AWS_S3_BUCKET, originalname, file.mimetype);
  }

  async s3_upload(file, bucket, name, mimetype) {
    
    const s3 = new AWS.S3 ({
        accessKeyId: this.config.get<string>('AWS_S3_ACCESS_KEY'),
        secretAccessKey: this.config.get<string>('AWS_S3_SECRET_KEY'),
    });

    const params ={
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: "public-read",
      ContentType: mimetype,
      ContentDisposition:"inline",
      CreateBucketConfiguration: {
          LocationConstraint: "ap-south-1"
      }
    };

    console.log(params);

    try {
      let s3Response = await s3.upload(params).promise();
      console.log(s3Response);
      return s3Response.Location;

    } catch (e){
      console.log(e);
    }
  }
}